import { GetStaticProps } from 'next'
import ProductList from '../../components/Store/ProductList'
import client from '../../square.connect'
import { CatalogObject } from 'square/api'
import JSONBig from 'json-bigint'

const Store = ({ products }: { products: CatalogObject[] }) => {
	return (
		<div className="flex flex-col">
			<div className="flex h-40 w-full items-center justify-center">
				<h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Store</h2>
			</div>
			<ProductList products={products} />
			<p className="text-center text-base font-bold tracking-tight sm:text-lg">
				All sales are subject to applicable taxes
			</p>
		</div>
	)
}

export default Store

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await client.catalog.list({
			types: 'ITEM',
		})
		const objects = response.data

		const filteredObjs = objects.map((obj) => {
			if ('itemData' in obj && obj.itemData) {
				return {
					...obj,
					itemData: {
						...obj.itemData,
						categories: [],
						reportingCategory: [],
					},
				}
			}
			return obj
		})

		return {
			props: {
				products: JSONBig.parse(JSONBig.stringify(filteredObjs)),
			},
			revalidate: 1800, // Rebuild every 30 minutes
		}
	} catch (error) {
		console.error('Failed to fetch products from Square:', error)
		return {
			props: {
				products: [],
			},
			revalidate: 1800,
		}
	}
}
