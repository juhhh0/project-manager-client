import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($user: LoginInput!) {
    login(user: $user) {
      token
      name
      id
      email
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation Signup($user: SignupInput!) {
    signup(user: $user) {
      id
      email
      name
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $project: UpdateProjectInput!) {
    updateProject(id: $id, project: $project) {
      title
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($project: AddProjectInput!) {
    addProject(project: $project) {
      title
    }
  }
`;

export const ADD_TASK = gql`
  mutation AddTask($projectId: ID!, $task: AddTaskInput!) {
    addTask(projectId: $projectId, task: $task) {
      title
    }
  }`
