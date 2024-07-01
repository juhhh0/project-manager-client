import { ProjectType } from "../../types/types";
import { Link } from "react-router-dom";

type Props = {
  title?: string;
  projects: ProjectType[];
};

const ProjectList: React.FC<Props> = ({ title, projects }) => {

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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
