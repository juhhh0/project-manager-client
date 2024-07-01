import { useQuery } from "@apollo/client";
import NewProjectForm from "./Project/NewProjectForm";
import ProjectList from "./Project/ProjectList";
import { GET_USER_PROJECTS } from "../services/queries";

const UserHome: React.FC = () => {
  const { data, error, loading } = useQuery(GET_USER_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <NewProjectForm />
      <ProjectList title="Your Projects" projects={data.userProjects} />
    </>
  );
};

export default UserHome;
