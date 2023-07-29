import ProductList from "../../components/Store/ProductList";
import client from "../../square.connect";
import { ICatalogObject } from "../../utils/types/CatalogTypes";
import JSONBig from "json-bigint";
import { ApiResponse, ListCatalogResponse } from "square";

interface IProps {
  products: Array<ICatalogObject>;
}

const Store = ({ products }: IProps) => {
  return <div className="flex flex-col gap-4">
    <div className="w-full flex justify-center">
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">Store</h2>
    </div>
    <ProductList products={products} />
  </div>;
};
export default Store;

export async function getStaticProps() {
  try {
    const response: ApiResponse<ListCatalogResponse> = await client.catalogApi.listCatalog(undefined, "ITEM");

    const filterResponse = response.result.objects?.filter(product => product.itemData);

    return {
      props: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        products: JSONBig.parse(JSONBig.stringify(filterResponse))
      },
      revalidate: 1800
    };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch Products");
  }
}