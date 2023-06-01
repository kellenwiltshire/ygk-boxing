import {render, screen} from '@testing-library/react'
import ProductInfo from './ProductInfo'
import {IProduct} from '../../utils/types/StoreTypes'

const mockProduct: IProduct = {
	id: 1,
	name: 'Basic Tee 8-Pack',
	href: '/store/product/1',
	price: '$256',
	description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
	options: '8 colors',
	imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
	imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
}

describe('ProductInfo', () => {
	it('renders product information correctly', () => {
		render(<ProductInfo product={mockProduct} />)

		// Assert the product name is rendered
		const productName = screen.getByText(/Basic Tee 8-Pack/i)
		expect(productName).toBeInTheDocument()

		// Assert the product price is rendered
		const productPrice = screen.getByText(/\$256/i)
		expect(productPrice).toBeInTheDocument()

		// Assert the product description is rendered
		const productDescription = screen.getByText(/Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day./i)
		expect(productDescription).toBeInTheDocument()

		// Assert the product image is rendered with the correct alt text
		const productImage = screen.getByAltText(/Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green./i)
		expect(productImage).toBeInTheDocument()
		expect(productImage).toHaveAttribute('src', 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg')
	})

	it('renders add to bag button', () => {
		render(<ProductInfo product={mockProduct} />)

		// Assert the add to bag button is rendered
		const addToBagButton = screen.getByRole('button', {name: /add to bag/i})
		expect(addToBagButton).toBeInTheDocument()
	})
})