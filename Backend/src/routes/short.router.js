import express from "express";
import { createNewRegisterController } from "../controllers/shortUrl.controller.js";

const urlRouter = express.Router();

urlRouter.get('/', (req, res) => {
    return res.send('Hello from short')
})

urlRouter.post('/', createNewRegisterController)

export default urlRouter