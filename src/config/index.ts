import dotenv from "dotenv";
import path from "path";
import { env } from "process";

dotenv.config({path: path.join(process.cwd(), "env")});

const config = {
    env: process.env.NODE_ENV ? Number(process.env.NODE_ENV) : 5000,
    port: process.env.PORT || 5000
}

export default config;