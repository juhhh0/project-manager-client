import { ProjectType, TaskType } from "../../../types/types";
import NewTaskForm from "./NewTaskForm";

type Props = {
  project: ProjectType;
};

const ProjectTasks: React.FC<Props> = ({ project }) => {
    console.log(project)
  return (
    <section>
      <h1>Tasks</h1>
      <ul>
        {project.tasks.map((task: TaskType) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.content}</p>
          </li>
        ))}
      </ul>
      <NewTaskForm project={project.id} />
    </section>
  );
};

export default ProjectTasks;
