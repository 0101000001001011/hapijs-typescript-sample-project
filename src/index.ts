"use strict";

import { Server, Request, ResponseToolkit } from "@hapi/hapi";

import * as HapiSwagger from "hapi-swagger";
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");

import productsRoutes from "./products/router";

const init = async () => {
    const server: Server = new Server({
        port: 4000,
        host: "localhost",
        routes: {
            cors: true,
        },
    });

    const swaggerOptions = {
        info: {
            title: "Test API Documentation",
            version: "0.0.1",
        },
        schemes: ["http", "https"],
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions,
        },
    ]);

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
