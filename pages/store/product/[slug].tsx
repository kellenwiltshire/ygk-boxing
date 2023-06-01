import {IProduct} from '../../../utils/types/StoreTypes'
import ProductInfo from '../../../components/Store/ProductInfo'

const product: IProduct = {
	id: 1,
	name: 'Basic Tee 8-Pack',
	href: '/store/product/1',
	price: '$256',
	description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
	options: '8 colors',
	imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
	imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
}

const ProductPage = () => {
	return (
		<ProductInfo product={product} />
	)
}
export default ProductPage