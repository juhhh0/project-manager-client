import { useQuery } from "@apollo/client";
import ProjectList from "./ProjectList";
import { GET_USER_PROJECTS } from "../../services/queries";

const UserProjects: React.FC = () => {
  const { data, error, loading } = useQuery(GET_USER_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ProjectList title="Your Projects" projects={data.userProjects} />;
};

export default UserProjects;
