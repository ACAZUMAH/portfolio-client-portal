import { gql, useQuery } from "@apollo/client";
import {
  GetProjectFilters,
  ProjectConnection,
  QueryGetPublicProjectsArgs,
} from "src/interfaces/graphql/graphql";

const getProjectsGql = gql`
  query GetPublicProjects($filters: GetProjectFilters!) {
    getPublicProjects(filters: $filters) {
      edges {
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
        links {
          label
          url
          type
        }
        mediaIds
        caseStudySections {
          title
          body
          order
        }
        visibility
        status
        featured
        order
        seo {
          title
          description
          keywords
          ogImageId
        }
        github {
          repoUrl
          stars
          language
          pushedAt
          defaultBranch
        }
        createdAt
        updatedAt
      }
      pageInfo {
        hasNextPage
        limit
        page
        total
      }
    }
  }
`;

export const useGetProjectsQuery = (filters: GetProjectFilters = {}) => {
  const { data, ...result } = useQuery<
    { getPublicProjects: ProjectConnection },
    QueryGetPublicProjectsArgs
  >(getProjectsGql, {
    variables: {
      filters,
    },
  });

  const projects = data?.getPublicProjects?.edges || [];
  const pageInfo = data?.getPublicProjects?.pageInfo;

  return {
    projects,
    pageInfo,
    ...result,
  };
};
