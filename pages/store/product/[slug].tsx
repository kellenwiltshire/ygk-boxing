import ProductInfo from '../../../components/Store/ProductInfo'
import { ICatalogObject } from '../../../utils/types/CatalogTypes'
import JSONBig from 'json-bigint'
import { GetServerSideProps } from 'next'
import client from '../../../square.connect'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'

interface IProps {
	product: ICatalogObject
}

const ProductPage = ({ product }: IProps) => {
	return <ProductInfo product={product} />
}
export default ProductPage

interface PageProps {
	product: ICatalogObject
}

export const getServerSideProps: GetServerSideProps<
	PageProps,
	NextParsedUrlQuery
> = async (context) => {
	const response = await client.catalog.object.get({
		objectId: context.query.slug as string,
	})
	const filteredObj = response.object &&
		'itemData' in response.object && {
			...response.object,
			itemData: {
				// @ts-ignore
				...response.object.itemData,
				categories: [],
				reportingCategory: [],
			},
		}
	if (!filteredObj) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			product: JSONBig.parse(JSONBig.stringify(filteredObj)) as ICatalogObject,
		},
	}
}
