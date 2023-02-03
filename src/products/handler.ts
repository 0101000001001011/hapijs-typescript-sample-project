import { Request, ResponseToolkit } from "@hapi/hapi";
import { fetchAllProducts, fetchSingleProduct } from "./repo";

export const getAllProductsHandler = async (
    request: Request,
    h: ResponseToolkit,
) => {
    const data = fetchAllProducts(request.query.category);
    return h.response(data).code(200);
};

export const getSingleProductHandler = async (
    request: Request,
    h: ResponseToolkit,
) => {
    const data = fetchSingleProduct(request.params.productId);
    return h.response(data).code(200);
};
