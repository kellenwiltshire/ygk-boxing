import { ICatalogObject } from "../../utils/types/CatalogTypes";

interface IProps {
  product: ICatalogObject;
}

const ProductCard = ({ product }: IProps) => {
  if (product.itemData) {

    return <div
      key={product.id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg"
          alt="description"
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href="/">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.itemData.name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">Description</p>
        <div className="flex flex-1 flex-col justify-end">
          <p
            className="text-base font-medium text-gray-900">{(product.itemData.variations[0].itemVariationData.priceMoney.amount / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>;
  } else {
    console.log("NO DATA: ", product);
    return <></>;
  }
};

export default ProductCard;