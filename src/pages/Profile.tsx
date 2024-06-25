import { gql, useQuery } from "@apollo/client";
import ProjectList from "../components/project/ProjectList";

const GET_USER = gql`
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

export default function Profile() {
  const { data, error, loading } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.userProfile.name}</h2>
      <p>{data.userProfile.email}</p>
      <ProjectList title="Projects" projects={data.userProfile.projects} />
    </div>
  );
}
