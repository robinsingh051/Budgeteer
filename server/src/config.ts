import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

const config = {
    port: process.env.PORT,

    jwt: {
        secret: process.env.JWT_SECRET,
        accessTokenExpiryMS: 5000,
        refreshTokenExpiryMS: 50000,
    },

    database: {
        client: process.env.DB_CLIENT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
};

export default config;
