import { Link } from "react-router-dom";
import { ProjectType } from "../../types/types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type Props = {
  project: ProjectType;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      className="bg-white/5 relative p-3 flex rounded-lg h-40 flex-1 min-w-48 md:min-w-80 max-w-md"
      to={"/project/" + project.id}
    >
      <li>
        <p>{project.title}</p>
        <p className="opacity-70">{project.description}</p>

        {project.hostingUrl && (
          <span className="absolute right-3 top-3 p-1 opacity-50 border border-white rounded-md">
            <Link to={project.hostingUrl}>
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </Link>
          </span>
        )}
      </li>
    </Link>
  );
};

export default ProjectCard;
