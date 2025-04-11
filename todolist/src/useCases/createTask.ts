import { Task } from "../entities";

export function createTask (name: string): Task {
    const task: Task = {
        name: name,
        status: 'Active',
        id: Date.now(),
    } 

    return task;
}