import { Router } from "express"
import { HealthCheckController } from "./controller/healthCheck.controller"
import { HealthCheckRoute } from "./routes/healtchCheck.routes";

export const routes = (app: Router) => {
    //healtcheck
    HealthCheckRoute(app);
}