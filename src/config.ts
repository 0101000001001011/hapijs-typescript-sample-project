import dotenv from "dotenv";

dotenv.config();

const config = {
  BASE_URL: process.env.BASE_URL || "http://localhost:4000",
  PORT: process.env.PORT || 4000,
  HOSTNAME: process.env.HOSTNAME || "localhost",
  DB_CLIENT: process.env.DB_CLIENT,
  DB_CONNECTION: process.env.DB_CONNECTION,
};

export default config;
