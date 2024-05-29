import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    APP_PORT : process.env.AIDBOX_CLIENT_ID,
    DATABASE_URL : process.env.DATABASE_URL as string
};