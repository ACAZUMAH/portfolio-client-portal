import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { getSessionId, getVisitorId } from "./useVisitorId";

const TRACK_VISIT = gql`
  mutation TrackVisit($data: VisitEventInput!) {
    trackVisit(data: $data)
  }
`;

const TRACK_PROJECT_IMPRESSION = gql`
  mutation TrackProjectImpression($data: ProjectImpressionInput!) {
    trackProjectImpression(data: $data)
  }
`;

const TRACK_RESUME_DOWNLOAD = gql`
  mutation TrackResumeDownload($id: ID!, $visitorId: String, $path: String) {
    trackResumeDownload(id: $id, visitorId: $visitorId, path: $path)
  }
`;

const TRACK_OUTBOUND_CLICK = gql`
  mutation TrackOutboundClick($data: OutboundClickInput!) {
    trackOutboundClick(data: $data)
  }
`;

const getDeviceType = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/ipad|tablet/.test(userAgent)) return "tablet";
  if (/mobi|android|iphone/.test(userAgent)) return "mobile";
  return "desktop";
};

const getUtmValue = (key: string, fallback: string) => {
  return new URLSearchParams(window.location.search).get(key) || fallback;
};

export const usePortfolioTracking = (featuredProjects: any[] = []) => {
  const [trackVisit] = useMutation(TRACK_VISIT);
  const [trackProjectImpression] = useMutation(TRACK_PROJECT_IMPRESSION);
  const [trackResumeDownload] = useMutation(TRACK_RESUME_DOWNLOAD);
  const [trackOutboundClick] = useMutation(TRACK_OUTBOUND_CLICK);

  useEffect(() => {
    const visitKey = `portfolio-visit-tracked:${window.location.pathname}`;
    if (sessionStorage.getItem(visitKey)) return;

    const visitorId = getVisitorId();
    sessionStorage.setItem(visitKey, "true");
    trackVisit({
      variables: {
        data: {
          visitorId,
          sessionId: getSessionId(),
          path: window.location.pathname,
          referrer: document.referrer || "direct",
          userAgent: navigator.userAgent,
          device: getDeviceType(),
          utmSource: getUtmValue("utm_source", "direct"),
          utmMedium: getUtmValue("utm_medium", "none"),
          utmCampaign: getUtmValue("utm_campaign", "none"),
        },
      },
    }).catch(() => {
      sessionStorage.removeItem(visitKey);
    });
  }, [trackVisit]);

  useEffect(() => {
    if (!featuredProjects.length) return;

    const visitorId = getVisitorId();
    featuredProjects.forEach(project => {
      trackProjectImpression({
        variables: {
          data: {
            projectId: project.id,
            slug: project.slug,
            visitorId,
            path: window.location.pathname,
          },
        },
      }).catch(() => undefined);
    });
  }, [featuredProjects, trackProjectImpression]);

  return {
    getVisitorId,
    trackOutboundClick,
    trackResumeDownload,
  };
};
