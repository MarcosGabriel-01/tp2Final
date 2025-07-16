import { Router } from "express";
import controller from "../container/container.js";
import detectarColision from "../midlewares/Colision.js";
import validarVuelo from "../midlewares/Vuelo.js";

const routes = Router();

routes.get("/", controller.getAll);
routes.get("/:id", controller.getById);
routes.post("/", validarVuelo, detectarColision, controller.create);

export default routes;
