import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      title
      description
      content
      githubUrl
      hostingUrl
      tasks {
        id
        title
        content
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    userProfile {
      id
      email
      name
      projects {
        title
        userId
        description
        id
      }
    }
  }
`;

export const GET_USER_PROJECTS = gql`
  query GetUserProjects {
    userProjects {
      title
      description
      hostingUrl
      userId
      id
    }
  }
`;