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