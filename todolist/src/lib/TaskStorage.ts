import { TaskInterface } from "../entities";

const key = 'tasks'; 

export const taskStorage = {
  setTasks(tasks: TaskInterface[]) {
    localStorage.setItem(key, JSON.stringify(tasks));
    const savedTasks = localStorage.getItem(key);
    return savedTasks ? JSON.parse(savedTasks) : [];
  },

  getTasks(): TaskInterface[] {
    const tasks = localStorage.getItem(key);
    return tasks ? JSON.parse(tasks) : [];
  },
};