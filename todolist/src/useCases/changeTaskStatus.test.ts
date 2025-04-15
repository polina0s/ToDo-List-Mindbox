import { vi } from "vitest";
import { changeTaskStatus } from "./changeTaskStatus"

describe('Test change task status', () => {
    beforeEach(() => {
        vi.useFakeTimers();
      });
    
      afterEach(() => {
        vi.useRealTimers();
      });

    it('should change task status', () => {
        const date = new Date(2000, 1, 1, 13);
        vi.setSystemTime(date);

        const task = changeTaskStatus({name: 'task', status: 'active', id: Date.now()});
        expect(task).toEqual({
            name: 'task',
            status: 'completed',
            id: Date.now()
        })
    })
})