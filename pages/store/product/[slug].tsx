import ProductInfo from "../../../components/Store/ProductInfo";
import { ICatalogObject } from "../../../utils/types/CatalogTypes";
import JSONBig from "json-bigint";
import { GetServerSideProps } from "next";
import client from "../../../square.connect";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";

interface IProps {
  product: ICatalogObject;
}

const ProductPage = ({ product }: IProps) => {

  return (
    <ProductInfo product={product} />
  );

};
export default ProductPage;

interface PageProps {
  product: ICatalogObject;
}

export const getServerSideProps: GetServerSideProps<PageProps, NextParsedUrlQuery> = async (context) => {
  const response = await client.catalogApi.retrieveCatalogObject(context.query.slug as string);
  return {
    props: {
      product: JSONBig.parse(JSONBig.stringify(response.result.object)) as ICatalogObject
    }
  };
};