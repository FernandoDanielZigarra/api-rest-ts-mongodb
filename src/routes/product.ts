import { Router } from "express";
import { deleteProduct, getProduct, getAllProducts, postProduct, updateProduct } from "../controllers/product";
import { logMiddleware } from "../middlewares/log";

const router = Router()

router.get('/', logMiddleware, getAllProducts)
        .post('/', postProduct)
        .get('/:id', getProduct)
        .put('/:id', updateProduct)
        .delete('/:id', deleteProduct)

export { router }