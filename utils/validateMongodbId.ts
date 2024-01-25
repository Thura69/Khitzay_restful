import { NextFunction, Response } from "express";
import mongoose from "mongoose";
import { Fmsg } from "./Rmsg";


export const validateMongodbId = (res: Response, id: string) => {
    try {
    const isValidate = mongoose.Types.ObjectId.isValid(id);
    if (!isValidate) return Fmsg(res, "This is not validate or not found", 403);  
    } catch (e) {
        throw new Error(e);
  }
}