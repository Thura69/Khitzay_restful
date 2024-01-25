import { Response,Request } from "express";
import { Fmsg, Smsg } from "../utils/Rmsg";
import { createSizeServices, deleteSizeServices, getAllSizesServices } from "../services/sizes.service";
import { validateMongodbId } from "../utils/validateMongodbId";

//get sizes
export const getAllSizesController = async (req: Request, res: Response) => {
    try {
        const sizes = await getAllSizesServices();
        return Smsg(res,"All Sizes",sizes);
    } catch (e: any) {
        return Fmsg(res, e, 500);
    }
};

//create sizes
export const createSizesController = async (req: Request, res: Response) => {
    try {
        const { size } = req.body;
        const sizes = await createSizeServices(size);
        
        if (!sizes) return Fmsg(res, "Create Size failed", sizes);

        return Smsg(res, 'Create Size successful', 200);

    } catch (e: any) {
        return Fmsg(res, "size already existed", 500);
    }
};

//delete sizes

export const deleteSizesController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        validateMongodbId(res, id);
        const result = await deleteSizeServices(id);
        return Smsg(res, "Size deleted!", result);
    } catch (e: any) {
        return Fmsg(res, e, 500);
    }
}