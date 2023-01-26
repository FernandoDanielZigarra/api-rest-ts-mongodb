import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middlewares/session";

//solo se puede ingresar a esta ruta si la sesión esta activa, que tenga un JWT válido

const router = Router()

router.get('/', checkJwt, getOrders)

export { router }