import { vi } from "vitest";
import {screen} from '@testing-library/react'
import { Task } from "./Task";
import { customRender as render } from "../../utils/test-utils";

describe('test Task component', () => {
    it('should render an active Task',  () => {
        const mockFn = vi.fn()

        render(<Task id={123} name="task" status="active" handleChangeStatus={mockFn} />)
 
        expect(screen.getByText('task')).toBeInTheDocument()
    })
})