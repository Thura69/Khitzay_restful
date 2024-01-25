import { sizesModel } from "../model/sizes.model";

//get all sizes
export const getAllSizesServices = async () => {
    try {
        return await sizesModel.find();
    } catch (e) { throw new Error(e) }  
};

//create sizes
export const createSizeServices = async (size: string) => {
    try {
        return await sizesModel.create({ size: size });
    } catch (e) {
        throw new Error(e);
    }
};

//gelete sizes
export const deleteSizeServices = async (id: string) => {
    try {
       return await sizesModel.deleteOne({id:id})
    } catch (e) {
        throw new Error(e);
   }
};

