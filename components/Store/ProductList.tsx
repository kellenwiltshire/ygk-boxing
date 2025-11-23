import ProductCard from './ProductCard'
import { ICatalogObject } from '../../utils/types/CatalogTypes'
import { CatalogObject } from 'square/api'

const ProductList = ({ products }: { products: CatalogObject[] }) => {
	return (
		<div data-testid="product-list">
			<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>
				<div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
					{products.map((product: CatalogObject) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductList
