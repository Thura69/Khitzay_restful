import { productModel } from "../model/products.model";
import { ProductInput } from "../types/products.type";

//create product
export const createProduct = async (obj:ProductInput) => {
     try {
         const product = await productModel.create(obj);
         return product;
    } catch (err: any) {
        throw new Error(err);
    }
};

//get products
export const getAllProductsServices = async () => {
    try {
        const products = await productModel.find();
        return products;
    } catch (err: any) {
        throw new Error(err);
    }
};

//update products
export const updateProudctsServices = async (id: string, payload: object) => {
    try {
        const product = await productModel.findByIdAndUpdate(id, payload, { new: true });
        return product;
    } catch (err: any) { throw new Error(err) };
};