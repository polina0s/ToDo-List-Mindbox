import { customRender as render } from "../../utils/test-utils";
import {screen} from '@testing-library/react'
import { TasksPage } from "./TasksPage"; 

describe('test TasksPages component', () => {
    it('should render a TasksPages',  () => {
        render(<TasksPage />)
 
        expect(screen.getByText('Todos')).toBeInTheDocument()
    })
})