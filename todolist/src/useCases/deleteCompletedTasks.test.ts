import { vi } from "vitest"
import { deleteCompletedTasks } from "./deleteCompletedTasks";
import { ITask } from "../entities";

describe('Test delete completed task', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    });
        
    afterEach(() => {
        vi.useRealTimers()
    });

    it('should filter list of tasks by completed status', () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        const list: ITask[] = [{name: 'task', status: 'active', id: Date.now()}, {name: 'task2', status: 'active', id: Date.now()}, {name: 'task3', status: 'completed', id: Date.now()}];
        const filteredList = [{name: 'task', status: 'active', id: Date.now()}, {name: 'task2', status: 'active', id: Date.now()}];
        expect(deleteCompletedTasks(list)).toEqual(filteredList);
    })
})