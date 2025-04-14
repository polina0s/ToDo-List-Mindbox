import { ITask } from "../entities";

export function changeTaskStatus (task: ITask): ITask {
    const newStatus = task.status === 'active' ? 'completed' : 'active';
    const changedTask: ITask = {name: task.name, status: newStatus, id: task.id}

    return changedTask;
}