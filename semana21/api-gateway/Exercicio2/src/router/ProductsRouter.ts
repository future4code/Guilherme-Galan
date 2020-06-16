import express from 'express'
import { ProductsController } from '../controller/ProductsController';

export const productsRouter = express.Router();

productsRouter.get("/:id", new ProductsController().getById);
productsRouter.post("/create", new ProductsController().create);