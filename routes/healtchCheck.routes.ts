import { Router } from "express";
import { HealthCheckController } from "../controller/healthCheck.controller";
export function HealthCheckRoute(app: Router) {
    //health check
    app.get('/healthcheck', HealthCheckController);
};