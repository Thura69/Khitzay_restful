import { Router } from "express";
import { validator } from "../middlewares/validator";
import { productSchema } from "../schema/products.schema";
import { CreateProductController, GetAllProductsController, UploadImagesController } from "../controller/product.controller";
import { productImageResize, uploadPhoto } from "../middlewares/uploadImages";

export function ProductRoute(app: Router) {
    //create product
    app.post("/products", validator(productSchema), CreateProductController);

    //get products
    app.get("/products", GetAllProductsController);

    //upload images
    app.post("/products/images-upload/:id", uploadPhoto.array("images", 10), productImageResize, UploadImagesController);

    //add sizes and sku number
    app.post("/products/")
}