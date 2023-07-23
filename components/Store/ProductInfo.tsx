import { ICatalogObject } from "../../utils/types/CatalogTypes";

interface IProps {
  product: ICatalogObject;
}

const ProductInfo = ({ product }: IProps) => {
  return <div>
    <div
      className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      {/* Product Information */}
      <div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{product.itemData.name}</h1>
        </div>
        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>
          <div className="flex items-center">
            <p
              className="text-lg sm:text-xl">${(product.itemData.variations[0].itemVariationData.priceMoney.amount / 100).toFixed(2)}</p>
          </div>
          <div className="mt-4 space-y-6">
            <p className="text-base">Description</p>
          </div>
        </section>
      </div>
      {/* Product image */}
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <img src="/pictures/ygklogo.jpg" alt="Logo" className="h-full w-full object-cover object-center" />
        </div>
      </div>
      {/* Product form */}
      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" className="sr-only">
            Product options
          </h2>
          <form>
            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to bag
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>;
};

export default ProductInfo;