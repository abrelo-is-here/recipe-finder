import "dotenv/config"

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL, 
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL
}