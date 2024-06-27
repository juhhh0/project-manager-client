import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import UserProjects from "../components/project/UserProjects";
import NewProjectForm from "../components/project/NewProjectForm";

const Home: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated)
    return (
      <>
        <NewProjectForm />
        <UserProjects />
      </>
    );

  return <div>Home</div>;
};

export default Home;