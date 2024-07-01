import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { ProjectType } from "../../types/types";
import DeleteProject from "./ProjectSettings/DeleteProject";
import { Link } from "react-router-dom";

type Props = {
  title?: string;
  projects: ProjectType[];
};

const ProjectList: React.FC<Props> = ({ title, projects }) => {
  const auth: { id: string } | null = useAuthUser();

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul>
        {projects.map((project: ProjectType) => (
          <li
            key={project.id}
            className="border-b flex justify-between items-center py-8"
          >
            <Link to={"/project/" + project.id}>
              <p>{project.title}</p>
              <p className="opacity-70">{project.description}</p>
            </Link>
            {auth?.id === project.userId && <DeleteProject id={project.id} />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
