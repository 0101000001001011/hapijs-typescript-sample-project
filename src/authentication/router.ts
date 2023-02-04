import { Server } from "@hapi/hapi";
// import { getAllProductsHandler, getSingleProductHandler } from "./handler";

export default function productRoutes(server: Server, baseRoute: string) {
  server.route({
    method: "POST",
    path: baseRoute + "/register",
    options: {
      handler: (request, h) => h.response("register route"),
      auth: false,
      description: "Register User API",
      notes: "API to create a new user account",
      tags: ["auth", "register"],
    },
  });

  server.route({
    method: "POST",
    path: baseRoute + "/login",
    options: {
      handler: (request, h) => h.response("register route"),
      auth: false,
      description: "Products API",
      notes: "API to get single product",
      tags: ["auth", "login"],
    },
  });

  server.route({
    method: "POST",
    path: baseRoute + "/logout",
    options: {
      handler: (request, h) => h.response("logout route"),
      auth: false,
      description: "Products API",
      notes: "API to get single product",
      tags: ["auth", "logout"],
    },
  });
}
