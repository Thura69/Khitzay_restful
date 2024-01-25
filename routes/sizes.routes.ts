import { Express, Router } from "express"
import { createSizesController, deleteSizesController, getAllSizesController } from "../controller/size.controller"
import { validator } from "../middlewares/validator";
import { sizeParams, sizeSchema } from "../schema/size.schema";

export const SizeRoute = (app: Router) => {
    //get sizes
    app.get('/sizes', getAllSizesController);
    //create size
    app.post('/sizes-create', validator(sizeSchema), createSizesController);
    //delete size
    app.delete('/sizes/:id', validator(sizeParams), deleteSizesController);
};