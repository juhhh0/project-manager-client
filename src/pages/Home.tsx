import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import UserHome from "../components/UserHome";

const Home: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) return <UserHome />;

  return <div>Home</div>;
};

export default Home;
