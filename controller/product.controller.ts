import {Response,Request,NextFunction, response } from 'express';
import { Fmsg, Smsg } from '../utils/Rmsg';
import { createProduct, getAllProductsServices, updateProudctsServices } from '../services/product.service';
import { validateMongodbId } from '../utils/validateMongodbId';
import { cloudinaryUploadImage } from '../utils/cloudinary';
import fs from 'fs';

//create products
export async function CreateProductController(req:Request,res:Response,next:NextFunction) {
    try {
        const prouduct = await createProduct(req.body);
        Smsg(res, "Create product is success", prouduct);
    } catch (e: any) {
        return Fmsg(res, e.message, 400);
 }
};

//get all products
export async function GetAllProductsController(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await getAllProductsServices();
        Smsg(res,"All products are here",products)
    } catch (e: any) {
        return Fmsg(res,e.message,400)
    }
};

//upload images controller
export async function UploadImagesController(req: Request, res: Response, next: NextFunction) {
    try { 
        const { id } = req.params;
        validateMongodbId(res, id);
        const upload = (path: any) => {
          return  cloudinaryUploadImage(path);
        };
        const urls: any[] = [];
        const files: any = req.files;


        for (const file of files) {
            const { path } = file;
            const newPath = await upload(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        };

        const updatePhoto = await updateProudctsServices(id, {
            images: urls.map((file: string) => file)
        });

        if (!updatePhoto) return Fmsg(res, "Upload images fail", 201);
        return Smsg(res, "Images", updatePhoto);

    } catch (e: any) {
        return Fmsg(res, e.message, 400);
    }
}