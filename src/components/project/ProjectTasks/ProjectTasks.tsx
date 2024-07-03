import { ProjectType, TaskType } from "../../../types/types";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

type Props = {
  project: ProjectType;
};

const ProjectTasks: React.FC<Props> = ({ project }) => {
  return (
    <section>
      <ul className="flex flex-col gap-3 my-6">
        {project.tasks.map((task: TaskType) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
      <NewTaskForm project={project.id} />
    </section>
  );
};

export default ProjectTasks;
