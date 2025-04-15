import { Footer } from "./Footer"
import { customRender as render } from "../../utils/test-utils"
import { screen } from "@testing-library/dom"

describe('test Footer component', () => {
    it('should render a Footer', () => {
        render(<Footer Quantity={<p>quantity</p>} Filter={<div>filters</div>} ClearButton={<button>Clear completed</button>}/>);

        expect(screen.getByText('quantity')).toBeInTheDocument();
        expect(screen.getByText('filters')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Clear completed'})).toBeInTheDocument();
    })
})