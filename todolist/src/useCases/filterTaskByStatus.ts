import { ITask } from "../entities";

interface FilterTaskByStatusProps {
    tasks: ITask[];
    status: 'active' | 'completed';
}

export function filterTaskByStatus({tasks, status}: FilterTaskByStatusProps):ITask[] {
    return tasks.filter((task) => task.status === status);
}