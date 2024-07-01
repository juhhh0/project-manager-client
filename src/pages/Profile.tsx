import { useQuery } from "@apollo/client";
import ProjectList from "../components/Project/ProjectList";
import { GET_USER } from "../services/queries";

const Profile: React.FC = () => {
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
};

export default Profile;