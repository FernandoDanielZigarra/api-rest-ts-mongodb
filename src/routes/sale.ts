import { Router } from "express";
import { deleteSale, getSale, getAllSales, postSale, updateSale } from "../controllers/sale";
import { logMiddleware } from "../middlewares/log";
import { checkJwt } from "../middlewares/session";

const router = Router()

router.get('/', checkJwt, getAllSales)
        .post('/', checkJwt, postSale)
        .get('/:id', checkJwt, getSale)
        .put('/:id', checkJwt, updateSale)
        .delete('/:id', checkJwt, deleteSale)

export { router }