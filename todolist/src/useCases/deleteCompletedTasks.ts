import { ITask } from "../entities";

export function deleteCompletedTasks(tasks: ITask[]):ITask[] {
    return tasks.filter((task) => task.status === 'active')
}