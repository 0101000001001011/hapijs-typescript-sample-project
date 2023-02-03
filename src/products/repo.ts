import { productsData } from "../data/products";
import { ProductType } from "./types";

export const fetchAllProducts = (category: string) => {
    let responseData: ProductType[] | undefined;
    if (category) {
        responseData = productsData.filter((d) => d.category === category);
    } else {
        responseData = productsData;
    }
    return responseData;
};

export const fetchSingleProduct = (productId: string) => {
    let responseData: ProductType | undefined = productsData.find(
        (d) => d.id === productId,
    );
    return responseData;
};
