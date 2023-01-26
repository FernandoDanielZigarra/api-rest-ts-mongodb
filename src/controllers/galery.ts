import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getImage = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_GET_IMAGE')
    }
}

const getImages = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_GET_IMAGES')
    }
}

const updateImage = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_IMAGE')
    }
}

const postImage = ({ body }: Request, res: Response) => {
    try {
        res.send(body
        )
    } catch (e) {
        handleHttp(res, 'ERROR_POST_IMAGE')
    }
}

const deleteImage = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_IMAGE')
    }
}

export { getImage, getImages, updateImage, postImage, deleteImage }