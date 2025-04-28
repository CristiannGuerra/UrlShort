import dotenv from "dotenv";

dotenv.config();

const ENVIRONMENT = {
    PORT: process.env.PORT || 3000
}

export default ENVIRONMENT