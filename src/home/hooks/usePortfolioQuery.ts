import { gql, useQuery } from "@apollo/client";

const PORTFOLIO_QUERY = gql`
  query Portfolio {
    portfolio {
      profile {
        id
        fullName
        title
        headline
        bio
        email
        phone
        location
        linkedInUrl
        githubUrl
        twitterUrl
      }
      availability {
        label
        description
        acceptingWork
      }
      experiences {
        id
        role
        company
        location
        workMode
        startDate
        endDate
        isCurrent
        highlights
      }
      education {
        id
        institution
        program
        location
        endDate
      }
      certifications {
        id
        title
        issuer
        date
      }
      skills {
        id
        name
        category
        featured
      }
      featuredProjects {
        id
        title
        slug
        summary
        role
        company
        client
        stack
        features
        outcomes
        mediaIds
        visibility
        status
        github {
          repoUrl
          stars
          language
          pushedAt
        }
      }
      projects {
        id
        title
        slug
        summary
        stack
        mediaIds
        visibility
        status
      }
      defaultResume {
        id
        title
        url
        focus
      }
      testimonials {
        id
        name
        role
        company
        quote
      }
    }
  }
`;

export const usePortfolioQuery = () => {
  return useQuery(PORTFOLIO_QUERY);
};
