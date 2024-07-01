type ProjectType = {
    id: string;
    title: string;
    description: string;
    userId: string;
    tasks: TaskType[]
}

type TaskType = {
    id: string;
    title: string;
    content: string;
}

export type { ProjectType, TaskType }