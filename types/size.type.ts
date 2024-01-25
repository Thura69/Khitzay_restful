import mongoose from "mongoose";

export interface SizeDocument extends mongoose.Document{
    size:string
};