import ProductList from '../../components/Store/ProductList'

const Store = () => {
	return <div className='flex flex-col gap-4'>
		<div className='w-full flex justify-center'>
			<h2 className='mt-2 text-3xl font-bold tracking-tight sm:text-5xl'>Store</h2>
		</div>
		<ProductList />
	</div>
}

export default Store