import { useQuery } from "@apollo/client";
import NewProjectForm from "./Project/NewProjectForm";
import { GET_USER_PROJECTS } from "../services/queries";
import { ProjectType } from "../types/types";
import { Link } from "react-router-dom";

const UserHome: React.FC = () => {
  const { data, error, loading } = useQuery(GET_USER_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="w-full">
      <ul className="flex gap-6 items-center flex-wrap w-fit mx-auto">
        <li className="px-5 min-w-48 md:min-w-80 w-full md:flex-1 max-w-md">
          <NewProjectForm />
        </li>
        {data.userProjects.map((project: ProjectType) => (
          <li
            key={project.id}
            className="bg-white/5 p-5 flex rounded-lg h-40 flex-1 min-w-48 md:min-w-80 max-w-md"
          >
            <Link to={"/project/" + project.id}>
              <p>{project.title}</p>
              <p className="opacity-70">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserHome;
