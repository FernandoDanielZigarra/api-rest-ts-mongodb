import { Router } from "express";
import { deleteItemGalery, getItemGalery, getAllGalery, postItemGalery, updateItemGalery } from "../controllers/galery";
import multerMiddleware from '../middlewares/file'

const router = Router()

router.get('/', getAllGalery)
        .post('/', multerMiddleware.single('myfile'), postItemGalery)
        .get('/:id', getItemGalery)
        .put('/:id', updateItemGalery)
        .delete('/:id', deleteItemGalery)

export { router }