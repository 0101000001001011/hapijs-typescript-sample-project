import { Either, left, right } from "fp-ts/lib/Either";

import db from "../db";
import { ProductType } from "./types";

export const fetchAllProducts = async (category: string): Promise<Either<string, ProductType[] | undefined>> => {
  let responseData: ProductType[] | undefined;
 
  if (category) {
    responseData = await db.select("*").from("products").where("category", category);
  } else {
    responseData = await db.select("*").from("products");
  }

  if (!responseData) {
    return left("Something went wrong!");
  }
  return right(responseData);
};

export const fetchSingleProduct = async (productId: string): Promise<Either<string, ProductType | undefined>> => {
  const responseData = await db.select("*").from("products").where("product_id", parseInt(productId));
  if (responseData.length === 0) {
    return left(`Product with Id ${productId} does not exist!`);
  }
  return right(responseData[0]);
};
