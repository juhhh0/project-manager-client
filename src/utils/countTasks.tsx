import { ProjectType } from "../types/types";

export const countTasks = (projects: ProjectType[]) => {
  return projects.reduce((acc, project) => {
    return acc + project.tasks.length;
  }, 0);
};
