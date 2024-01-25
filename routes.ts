import { Router } from "express"
import { HealthCheckController } from "./controller/healthCheck.controller"
import { HealthCheckRoute } from "./routes/healtchCheck.routes";
import { ProductRoute } from "./routes/product.routes";
import { SizeRoute } from "./routes/sizes.routes";

export const routes = (app: Router) => {
    //healtcheck
    HealthCheckRoute(app);

    //products
    ProductRoute(app);

    //size
    SizeRoute(app);
}