import ProductList from "../../components/Store/ProductList";
import client from "../../square.connect";
import { ICatalogObject } from "../../utils/types/CatalogTypes";
import JSONBig from "json-bigint";
import { ApiResponse, ListCatalogResponse } from "square";

interface IProps {
  products: Array<ICatalogObject>;
}

const Store = ({ products }: IProps) => {
  return <div className="flex flex-col">
    <div className="w-full flex justify-center items-center h-40">
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Store</h2>
    </div>
    <ProductList products={products} />
    <p className="text-base font-bold tracking-tight sm:text-lg text-center">All sales are subject to applicable taxes</p>
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