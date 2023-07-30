import ProductInfo from "../../../components/Store/ProductInfo";
import {
  ApiResponse,
  CatalogObject,
  Client,
  Environment,
  ListCatalogResponse,
  RetrieveCatalogObjectResponse
} from "square";
import { ICatalogObject } from "../../../utils/types/CatalogTypes";
import JSONBig from "json-bigint";
import { GetStaticPaths, GetStaticProps } from "next";

interface IProps {
  product: ICatalogObject;
}

const ProductPage = ({ product }: IProps) => {

  return (
    <ProductInfo product={product} />
  );

};
export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Production
  });
  try {
    const response: ApiResponse<ListCatalogResponse> = await client.catalogApi.listCatalog(undefined, "ITEM");
    if (response.result.objects) {
      /* eslint-disable @typescript-eslint/strict-boolean-expressions */
      const paths: Array<{
        params: {
          slug: string
        }
      }> = response.result.objects.map(item => {
        return {
          params: {
            slug: item.id
          }
        };
      }) || [];
      return {
        paths: paths,
        fallback: true
      };
    } else {
      return {
        paths: [],
        fallback: false
      };
    }
  } catch (error) {
    console.error("Error fetching product paths:", error);
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps: GetStaticProps<{
  product: ICatalogObject
}> = async ({ params }) => {
  const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Production
  });
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!params?.slug) return {
    notFound: true
  };
  try {
    const response: ApiResponse<RetrieveCatalogObjectResponse> = await client.catalogApi.retrieveCatalogObject(params.slug as string);
    if (response.result.object?.itemData) {
      return {
        props: {
          product: JSONBig.parse(JSONBig.stringify(response.result.object)) as ICatalogObject
        }
      };
    } else {
      return {
        notFound: true
      };
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      notFound: true
    };
  }
};