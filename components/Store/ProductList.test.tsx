import {render, screen} from '@testing-library/react'
import ProductList from './ProductList'

describe('ProductList', () => {
	it('renders Product List', () => {
		render(<ProductList />)

		// Assert that the correct number of product cards are rendered
		const testId = screen.getByTestId('product-list')
		expect(testId).toBeInTheDocument()
	})
})