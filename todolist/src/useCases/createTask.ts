import { ITask } from "../entities";

export function createTask ({name}: {name: string}): ITask {
    const task: ITask = {
        name: name,
        status: 'active',
        id: Date.now(),
    } 

    return task;
}