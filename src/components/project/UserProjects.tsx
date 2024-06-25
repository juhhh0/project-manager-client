import { gql, useQuery } from "@apollo/client";
import DeleteProject from "./DeleteProject";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";

const GET_USER_PROJECTS = gql`
  query GetUserProjects {
    userProjects {
      title
      description
      userId
      id
    }
  }
`;

export default function UserProjects() {
  const { data, error, loading } = useQuery(GET_USER_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ProjectList title="Your Projects" projects={data.userProjects} />;
}
