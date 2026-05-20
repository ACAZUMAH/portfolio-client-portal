import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";
import {
  GetProjectFilters,
  ProjectConnection,
  QueryGetPublicProjectsArgs,
} from "src/interfaces/graphql/graphql";

const getProjectsQueryGql = gql`
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
        medias {
          id
          size
          url
          filename
          mimeType
          directory
          createdAt
          updatedAt
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

export const useGetProjectQuery = (filters: GetProjectFilters) => {
  const { data, ...result } = useQuery<
    { getPublicProjects: ProjectConnection },
    QueryGetPublicProjectsArgs
  >(getProjectsQueryGql, {
    variables: { filters },
  });

  const projects = useMemo(() => {
    return data?.getPublicProjects?.edges || [];
  }, [data]);

  return { projects, ...result };
};
