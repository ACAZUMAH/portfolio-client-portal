export interface ProjectLink {
  label?: string | null;
  type?: string | null;
  url?: string | null;
}

export interface ProjectMedia {
  id: string;
  url: string;
  filename?: string | null;
}

export interface FeaturedProject {
  id: string;
  title: string;
  slug: string;
  summary: string;
  role?: string | null;
  company?: string | null;
  client?: string | null;
  stack?: string[] | null;
  features?: string[] | null;
  outcomes?: string[] | null;
  links?: ProjectLink[] | null;
  medias?: ProjectMedia[] | null;
  visibility?: string | null;
  status?: string | null;
  github?: {
    repoUrl?: string | null;
    stars?: number | null;
    language?: string | null;
    pushedAt?: string | null;
  } | null;
}

export interface ProjectTrackingHandler {
  (options: {
    variables: {
      data: {
        label?: string | null;
        path: string;
        type: string;
        url?: string | null;
        visitorId: string;
      };
    };
  }): Promise<unknown>;
}

export interface FeaturedProjectCard {
  id: string;
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
  meta: string;
  role?: string | null;
  status: string;
  stack: string[];
}

export interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
  getVisitorId: () => string;
  trackOutboundClick: ProjectTrackingHandler;
}

export interface CardCarouselProps {
  projects: FeaturedProjectCard[];
  autoplayDelay?: number;
  showPagination?: boolean;
  onProjectClick?: (project: FeaturedProjectCard) => void;
}
