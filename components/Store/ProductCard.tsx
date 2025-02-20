import { ICatalogObject } from "../../utils/types/CatalogTypes";
import Link from "next/link";
import { calculatePrice } from "../../utils/helpers/calcPrice";
import Image from 'next/image'

interface IProps {
  product: ICatalogObject;
}

const ProductCard = ({ product }: IProps) => {
  return <Link href={{ pathname: `/store/product/[slug]`, query: { slug: product.id } }}
               key={product.id}
               className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
  >
    <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
      <Image height={350} width={350}
        src="/pictures/ygklogo.webp"
        alt="description"
        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
      />
    </div>
    <div className="flex flex-1 flex-col space-y-2 p-4">
      <h3 className="text-sm font-medium text-gray-900">
        <span aria-hidden="true" className="absolute inset-0" />
        {product.itemData.name}
      </h3>
      <p className="text-sm text-gray-500">{product.itemData.description}</p>
      <div className="flex flex-1 flex-col justify-end">
        <p
          className="text-base font-medium text-gray-900">{calculatePrice(product.itemData.variations[0].itemVariationData.priceMoney.amount)}</p>
      </div>
    </div>
  </Link>;

};

export default ProductCard;