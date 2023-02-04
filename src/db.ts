import knex from "knex";
import config from "./config";

const db = knex({
  client: config.DB_CLIENT,
  connection: config.DB_CONNECTION,
});

export default db;
