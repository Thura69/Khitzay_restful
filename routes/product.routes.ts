import { Router } from "express";
import { validator } from "../middlewares/validator";
import { productSchema } from "../schema/products.schema";
import { CreateProductController } from "../controller/product.controller";

export function ProductRoute(app: Router) {
    //create product
    app.post("/products", validator(productSchema), CreateProductController);
}