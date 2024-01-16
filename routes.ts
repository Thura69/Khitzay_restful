import { Router } from "express"
import { HealthCheckController } from "./controller/healthCheck.controller"
import { HealthCheckRoute } from "./routes/healtchCheck.routes";
import { ProductRoute } from "./routes/product.routes";

export const routes = (app: Router) => {
    //healtcheck
    HealthCheckRoute(app);

    //products
    ProductRoute(app);
}