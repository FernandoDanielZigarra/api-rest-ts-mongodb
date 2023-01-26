import { Router } from "express";
import { deleteImage, getImage, getImages, postImage, updateImage } from "../controllers/galery";

const router = Router()

router.get('/', getImages)
        .post('/', postImage)
        .get('/:id', getImage)
        .put('/:id', updateImage)
        .delete('/:id', deleteImage)

export { router }