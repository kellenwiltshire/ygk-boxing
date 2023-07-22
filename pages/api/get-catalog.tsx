import { NextApiRequest, NextApiResponse } from "next";
import client from "../../square.connect";
import JSONBig from "json-bigint";

const getCatalog = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const response = await client.catalogApi.listCatalog();

    return res.status(response.statusCode).json(JSONBig.parse(JSONBig.stringify(response.result.objects)));
  } catch (error) {
    console.log("Unexpected Error Occurred: ", error);
    return res.json("Error Fetching Catalog");

  }
};

export default getCatalog;