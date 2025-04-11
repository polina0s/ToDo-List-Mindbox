import { TaskInterface } from "../entities";

const key = 'tasks'; 

export const taskStorage = {
  saveTasks(tasks: TaskInterface[]) {
    localStorage.setItem(key, JSON.stringify(tasks));
  },

  getTasks(): TaskInterface[] {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  },
};