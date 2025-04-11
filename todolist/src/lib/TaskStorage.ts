import { ITask } from "../entities";

const key = 'tasks'; 

export const taskStorage = {
  setTasks(tasks: ITask[]) {
    localStorage.setItem(key, JSON.stringify(tasks));
    const savedTasks = localStorage.getItem(key);
    return savedTasks ? JSON.parse(savedTasks) : [];
  },

  getTasks(): ITask[] {
    const tasks = localStorage.getItem(key);
    return tasks ? JSON.parse(tasks) : [];
  },
};