import { Request, ResponseToolkit } from "@hapi/hapi";
import { isLeft } from "fp-ts/lib/Either";

import { fetchAllProducts, fetchSingleProduct } from "./repo";
import { sendSuccessResponse, sendErrorResponse } from "../helpers/formatResponse";

export const getAllProductsHandler = async (request: Request, h: ResponseToolkit) => {
  const response = await fetchAllProducts(request.query.category);
  if (isLeft(response)) {
    return sendErrorResponse({ h });
  }
  return sendSuccessResponse({ h, data: response.right });
};

export const getSingleProductHandler = async (request: Request, h: ResponseToolkit) => {
  const response = await fetchSingleProduct(request.params.productId);
  if (isLeft(response)) {
    return sendErrorResponse({ h, message: response.left, statusCode: 400 });
  }
  return sendSuccessResponse({ h, data: response.right });
};
