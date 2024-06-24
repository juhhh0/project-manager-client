import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import UserProjects from "../components/UserProjects";
import NewProjectForm from "../components/NewProjectForm";

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
