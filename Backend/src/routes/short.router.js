import express from "express";
import { createNewRegisterController, getAlltUrlsController, redirectUrlController, getUrlbyShortUrlController, createNewPremiumRegisterController } from "../controllers/shortUrl.controller.js";

const urlRouter = express.Router();

// Routes
urlRouter.get('/', getAlltUrlsController)
urlRouter.post('/', createNewRegisterController)
urlRouter.post('/premium', createNewPremiumRegisterController)
urlRouter.get('/:shortUrl', redirectUrlController)
urlRouter.get('/url/:shortUrl', getUrlbyShortUrlController)

export default urlRouter