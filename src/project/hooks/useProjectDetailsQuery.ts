import { gql, useQuery } from "@apollo/client";

const PROJECT_QUERY = gql`
  query Project($slug: String!) {
    getPublicProjectBySlug(slug: $slug) {
      id
      title
      slug
      summary
      problem
      role
      company
      client
      stack
      features
      outcomes
      lessons
      visibility
      status
      mediaIds
      links {
        label
        url
        type
      }
      caseStudySections {
        title
        body
        order
      }
    }
  }
`;

export const useProjectDetailsQuery = (slug?: string) => {
  return useQuery(PROJECT_QUERY, {
    skip: !slug,
    variables: { slug },
  });
};
