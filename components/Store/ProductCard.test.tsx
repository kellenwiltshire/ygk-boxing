import {render, screen} from '@testing-library/react'
import ProductCard from './ProductCard'

const mockProduct = {
	id: 1,
	name: 'Basic Tee 8-Pack',
	href: '/store/product/1',
	price: '$256',
	description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
	options: '8 colors',
	imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
	imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
}

describe('ProductCard', () => {
	it('renders product information correctly', () => {
		render(<ProductCard product={mockProduct} />)

		// Assert the product name is rendered
		const productName = screen.getByText(/Basic Tee 8-Pack/i)
		expect(productName).toBeInTheDocument()

		// Assert the product description is rendered
		const productDescription = screen.getByText(/Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day./i)
		expect(productDescription).toBeInTheDocument()

		// Assert the product image is rendered with the correct alt text
		const productImage = screen.getByAltText(/Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green./i)
		expect(productImage).toBeInTheDocument()
		expect(productImage).toHaveAttribute('src', 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg')

		// Assert the product options are rendered
		const productOptions = screen.getByText(/8 colors/i)
		expect(productOptions).toBeInTheDocument()

		// Assert the product price is rendered
		const productPrice = screen.getByText(/\$256/i)
		expect(productPrice).toBeInTheDocument()
	})

	it('renders product link correctly', () => {
		render(<ProductCard product={mockProduct} />)

		// Assert the product link is rendered with the correct href attribute
		const productLink = screen.getByRole('link', {name: /Basic Tee 8-Pack/i})
		expect(productLink).toBeInTheDocument()
		expect(productLink).toHaveAttribute('href', mockProduct.href)
	})
})