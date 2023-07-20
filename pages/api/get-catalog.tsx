import { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "square";
import client from "../../square.connect";
import JSONBig from "json-bigint";

const getCatalog = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const response = await client.catalogApi.listCatalog();
    console.log(response);

    return res.status(response.statusCode).json(JSONBig.parse(JSONBig.stringify(response.result.objects)));
  } catch (error) {
    if (error instanceof ApiError) {
      error.result.errors.forEach((e: { category: string; code: number; detail: string; }) => {
        console.log(e.category);
        console.log(e.code);
        console.log(e.detail);
        return res.status(e.code).json(e.detail);
      });
    } else {
      console.log("Unexpected Error Occurred: ", error);
    }
  }
};

export default getCatalog;