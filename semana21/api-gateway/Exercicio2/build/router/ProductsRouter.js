"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
var express_1 = __importDefault(require("express"));
var ProductsController_1 = require("../controller/ProductsController");
exports.productsRouter = express_1.default.Router();
exports.productsRouter.get("/:id", new ProductsController_1.ProductsController().getById);
exports.productsRouter.post("/create", new ProductsController_1.ProductsController().create);
