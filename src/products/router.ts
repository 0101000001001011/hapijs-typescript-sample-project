import { Server } from "@hapi/hapi";
import { getAllProductsHandler, getSingleProductHandler } from "./handler";

export default function productRoutes(server: Server, baseRoute: string) {
    server.route({
        method: "GET",
        path: baseRoute,
        handler: getAllProductsHandler,
    });

    server.route({
        method: "GET",
        path: baseRoute + "/{productId}",
        handler: getSingleProductHandler,
    });
}
