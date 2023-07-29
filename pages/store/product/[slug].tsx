import ProductInfo from "../../../components/Store/ProductInfo";
import client from "../../../square.connect";
import { ApiResponse, CatalogObject, ListCatalogResponse, RetrieveCatalogObjectResponse } from "square";
import { ICatalogObject } from "../../../utils/types/CatalogTypes";
import JSONBig from "json-bigint";

interface IProps {
  product: ICatalogObject;
}

const ProductPage = ({ product }: IProps) => {
  return (
    <ProductInfo product={product} />
  );

};
export default ProductPage;

export async function getStaticPaths() {
  const response: ApiResponse<ListCatalogResponse> = await client.catalogApi.listCatalog(undefined, "ITEM");
  if (response.result.objects) {
    const products: Array<CatalogObject> = response.result.objects.filter(obj => {
      if (obj.itemData !== undefined) {
        return obj;
      }
    });
    const paths = products.map(product => {
      return {
        params: {
          slug: product.id
        }
      };
    });
    return {
      paths,
      fallback: true
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    const response: ApiResponse<RetrieveCatalogObjectResponse> = await client.catalogApi.retrieveCatalogObject(params.slug);

    if (response.result.object?.itemData) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        props: { product: JSONBig.parse(JSONBig.stringify(response.result.object)) }
      };
    }
  } catch (e) {
    throw new Error("Unable to retrieve catalog object");
  }
}