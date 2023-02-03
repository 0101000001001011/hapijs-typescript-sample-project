"use strict";

import { Server, Request, ResponseToolkit } from "@hapi/hapi";

import productsRoutes from "./products/router";

const init = async () => {
    const server: Server = new Server({
        port: 4000,
        host: "localhost",
        routes: {
            cors: true,
        },
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request: Request, h: ResponseToolkit) => {
            return "Practice Hapi JS project!";
        },
    });

    productsRoutes(server, "/api/products");

    await server.start();
    console.log("Server running on", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
