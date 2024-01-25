import { object, string } from "zod";


export const sizeSchema = object({
    body: object({
        size: string({ required_error: "Size is required!" })
    })
});

export const sizeParams = object({
    params: object({
        id: string({ required_error: 'params is required' })
    })
});