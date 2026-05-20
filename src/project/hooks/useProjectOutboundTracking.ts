import { gql, useMutation } from "@apollo/client";

const TRACK_OUTBOUND_CLICK = gql`
  mutation TrackOutboundClick($data: OutboundClickInput!) {
    trackOutboundClick(data: $data)
  }
`;

export const useProjectOutboundTracking = () => {
  const [trackOutboundClick] = useMutation(TRACK_OUTBOUND_CLICK);

  return { trackOutboundClick };
};
