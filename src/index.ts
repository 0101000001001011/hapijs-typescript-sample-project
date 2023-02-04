"use strict";

import { Server, Request, ResponseToolkit } from "@hapi/hapi";

import * as HapiSwagger from "hapi-swagger";
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");

import productsRoutes from "./products/router";

const init = async () => {
  // server instance created
  const server: Server = new Server({
    port: 4000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  // swagger config
  const swaggerOptions = {
    info: {
      title: "Test API Documentation",
      version: "0.0.1",
    },
    schemes: ["http", "https"],
  };

  // plugins
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  // home route
  server.route({
    method: "GET",
    path: "/",
    handler: (request: Request, h: ResponseToolkit) => {
      return "Practice Hapi JS project!";
    },
  });

  // routes
  productsRoutes(server, "/api/products");

  // server start
  await server.start();
  console.log("Server running on", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
