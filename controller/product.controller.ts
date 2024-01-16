import {Response,Request,NextFunction } from 'express';
import { Fmsg, Smsg } from '../utils/Rmsg';
import { createProduct } from '../services/product.service';
export async function CreateProductController(req:Request,res:Response,next:NextFunction) {
    try {
        console.log(req.body);
        const prouduct = await createProduct(req.body);
        Smsg(res, "Create product is success", prouduct);
    } catch (e: any) {
        return Fmsg(res, e.message, 400);
 }
};