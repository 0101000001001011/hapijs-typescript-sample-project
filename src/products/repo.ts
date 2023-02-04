import { Either, left, right } from "fp-ts/lib/Either";

import { productsData } from "../data/products";
import { ProductType } from "./types";

export const fetchAllProducts = (category: string): Either<string, ProductType[] | undefined> => {
  let responseData = category ? productsData.filter((d) => d.category === category) : productsData;

  if (!responseData) {
    return left("Something went wrong!");
  }
  return right(responseData);
};

export const fetchSingleProduct = (productId: string): Either<string, ProductType | undefined> => {
  let responseData = productsData.find((d) => d.id === productId);

  if (!responseData) {
    return left(`Product with Id ${productId} does not exist!`);
  }
  return right(responseData);
};
