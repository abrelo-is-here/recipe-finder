import { ENV } from "./src/config/env.js";


export default {
    schema: "./src/db/schema.js",
    out: "./src/db/migration.js",
    dialect: "postgresql",
    dbCredentials: {url: ENV.DB_URL}
}