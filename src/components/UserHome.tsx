import { useQuery } from "@apollo/client";
import NewProjectForm from "./Project/NewProjectForm";
import { GET_USER_PROJECTS } from "../services/queries";
import { ProjectType } from "../types/types";
import ProjectCard from "./Project/ProjectCard";
import { countTasks } from "../utils/countTasks";

const UserHome: React.FC = () => {
  const { data, error, loading } = useQuery(GET_USER_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const sumProjects = data.userProjects.length;
  const sumTasks = countTasks(data.userProjects);


  return (
    <section className="w-full">
      <ul className="flex gap-6 items-center flex-wrap w-fit mx-auto">
        <li className="p-3 min-w-48 md:min-w-80 w-full md:flex-1 max-w-md">
          <NewProjectForm />
        </li>
        <li className="p-3 min-w-48 rounded-md md:min-w-80 w-full md:flex-1 max-w-md border-4 border-white/5">
          <p>{sumProjects} projects</p>
          <p>{sumTasks} tasks remaining</p>
        </li>
        {data.userProjects.map((project: ProjectType) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </section>
  );
};

export default UserHome;
