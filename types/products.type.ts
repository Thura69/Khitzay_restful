import mongoose, { Types } from "mongoose";

interface sizesType {
    [size:string]:[number,string]
}
interface reviewType{
    star: number,
    comment: string,
    postedBy:Types.ObjectId
}

export interface ProductInput {
    title: string,
    price: number,
    description: string,
    gender:string,
};

export interface ProductDocument extends ProductInput, mongoose.Document{
    stock: number,
    images: [string],
    sizes: [sizesType],
    brandName: Types.ObjectId,
    gender: string,
    category: Types.ObjectId,
    subCategory: Types.ObjectId,
    color: [string],
    view: [Types.ObjectId],
    review: [reviewType],
    discount: number,
    isBestSelling: [Types.ObjectId],
    createdAt: Date,
    updatedAt:Date
} 
