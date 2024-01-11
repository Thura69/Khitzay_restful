import { NextFunction,Response,Request } from "express";

export function HealthCheckController(req: Request, res: Response, next: NextFunction) {
    return res.status(200).send("Healthy");
};