import { object,string,number, array } from "zod";

export const productSchema = object({
    body: object({
        tile: string({ required_error: "Title is requried" }),
        price: number({ required_error: "Price is required" }),
        stock: number({ required_error: "Stock is required" }),
        description: string({ required_error: "Description is required" }),
        brand_name: string({ required_error: "Brand is required" }),
        gender: string({ required_error: "Gender is required" }),
        category: string({ required_error: "Category is required" }),
        sub_category: array(string({ required_error: "sub_category is required" })),
 })
});