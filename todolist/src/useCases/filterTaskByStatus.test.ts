import { vi } from "vitest";
import { ITask } from "../entities";
import { filterTaskByStatus } from "./filterTaskByStatus";

describe('Test filter tasks by status', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    });
    
    afterEach(() => {
        vi.useRealTimers()
    });

    it('should filter tasks by status', () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        const list: ITask[] = [{name: 'task', status: 'active', id: Date.now()}, {name: 'task2', status: 'active', id: Date.now()}, {name: 'task3', status: 'completed', id: Date.now()}];
        const filteredList = [{name: 'task', status: 'active', id: Date.now()}, {name: 'task2', status: 'active', id: Date.now()}];
        expect(filterTaskByStatus({tasks: list, status: 'active'})).toEqual(filteredList);
    })
})