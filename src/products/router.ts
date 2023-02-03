import { Server } from "@hapi/hapi";
import { getAllProductsHandler, getSingleProductHandler } from "./handler";

export default function productRoutes(server: Server, baseRoute: string) {
    server.route({
        method: "GET",
        path: baseRoute,
        options: {
            handler: getAllProductsHandler,
            auth: false,
            description: "Products API",
            notes: "API to get all the products",
            tags: ["api", "products"],
        },
    });

    server.route({
        method: "GET",
        path: baseRoute + "/{productId}",
        options: {
            handler: getSingleProductHandler,
            auth: false,
            description: "Products API",
            notes: "API to get single product",
            tags: ["api", "products"],
        },
    });
}
