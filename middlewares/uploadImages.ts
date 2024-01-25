import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { NextFunction, Response, Request } from 'express';



const storage = multer.diskStorage({
  destination: function(req:Request, file:Express.Multer.File, callback) {
    callback(null,'./public/images');
  },
  filename: function (req:Request, file:Express.Multer.File, callback) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    callback(null,file.fieldname + "-" + uniqueSuffix + ".jpeg");
  }
});

const multerFilter = (req:Request, file:Express.Multer.File, callback)=>{
    if (file.mimetype.startsWith('images')) {
        callback(null, true);
    } else {
        callback({
            message:"Unsupported file format"
        })
    }
};

export const productImageResize = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || !req.files[0]) return next();

    console.log(req.files,"This is req files")

    await Promise.all(
      
        req.files?.map(async (file: Express.Multer.File) => {
              console.log('d');
            await sharp(file.path)
                .resize(300, 300)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`./public/images/products/${file.filename}`)
                fs.unlinkSync(`./public/images/products/${file.filename}`)
                
        })
    );

    next();

};


export const uploadPhoto = multer({
    storage: storage,
    // fileFilter: multerFilter,
    limits: { fieldNameSize: 200000 }
});