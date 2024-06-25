import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import UserProjects from "../components/project/UserProjects";
import NewProjectForm from "../components/project/NewProjectForm";

export default function Home() {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated)
    return (
      <>
          
        <NewProjectForm />
        <UserProjects />
      </>
    );

  return <div>Home</div>;
}
