import { object,string,number, array } from "zod";

export const productSchema = object({
    body: object({
        title: string({ required_error: "Title is requried" }),
        price: number({ required_error: "Price is required" }),
        gender: string({ required_error: "Gender is required" }),
 })
});