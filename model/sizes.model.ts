import mongoose from "mongoose";
import { SizeDocument } from "../types/size.type";


const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
        require: true,
        unique:true,
        lowercase: true,
    }
}, {
    timestamps: true
});

export const sizesModel = mongoose.model<SizeDocument>('sizes', sizeSchema);
