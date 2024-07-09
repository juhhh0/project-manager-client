type ProjectType = {
    id: string;
    title: string;
    description: string;
    userId: string;
    tasks: TaskType[]
    githubUrl: string;
    hostingUrl: string;
}

type TaskType = {
    id: string;
    title: string;
    content: string;
}

export type { ProjectType, TaskType }