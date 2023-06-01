import ProductCard from './ProductCard'
import {IProduct} from '../../utils/types/StoreTypes'

const products = [
	{
		id: 1,
		name: 'Basic Tee 8-Pack',
		href: '/store/product/1',
		price: '$256',
		description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
		options: '8 colors',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
		imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		price: '$32',
		description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
		options: 'Black',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
		imageAlt: 'Front of plain black t-shirt.',
	},
	{
		id: 4,
		name: 'Basic Tee 8-Pack',
		href: '#',
		price: '$256',
		description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
		options: '8 colors',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
		imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
	},
	{
		id: 5,
		name: 'Basic Tee',
		href: '#',
		price: '$32',
		description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
		options: 'Black',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
		imageAlt: 'Front of plain black t-shirt.',
	},
]

const ProductList = () => {
	return (
		<div data-testid='product-list'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Products</h2>

				<div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
					{products.map((product: IProduct) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductList