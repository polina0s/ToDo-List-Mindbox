import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createTask } from './createTask'

describe('Test create task', () => {
    beforeEach(() => {
        vi.useFakeTimers()
      });
    
      afterEach(() => {
        vi.useRealTimers()
      });

    it('should create a task', () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        const task = createTask({name: 'aaa'});        
        expect(task).toEqual({

            name: 'aaa',
            status: 'active',
            id: Date.now(),
        })
    })
})