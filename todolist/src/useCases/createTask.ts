import { TaskInterface } from "../entities";

export function createTask ({name}: {name: string}): TaskInterface {
    const task: TaskInterface = {
        name: name,
        status: false,
        id: Date.now(),
    } 

    return task;
}