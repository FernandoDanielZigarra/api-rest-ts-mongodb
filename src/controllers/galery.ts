import { Request, Response } from "express"
import { ItemGalery } from "../interface/galery.interface"
import { inserItemGalery, getItemsGalery, findItemGalery, editItemGalery, deleteOneItemGalery } from "../services/galery"
import { handleHttp } from "../utils/error.handle"

const getItemGalery = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await findItemGalery(id);
        const data = response ? response : "NOT FOUND"
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ItemGalery', e)
    }
}

const getAllGalery = async (req: Request, res: Response) => {
    try {
        const response = await getItemsGalery()
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ItemGaleryS', e)
    }
}

const updateItemGalery = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const reponse = await editItemGalery(id, body);
        res.send(reponse)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ItemGalery', e)
    }
}

const postItemGalery = async ({ body, file }: Request, res: Response) => {
    try {
        const { title, description } = body
        const newItemGalery = {
            title,
            description,
            fileName: `${file?.filename}`,
            path: `${file?.path}`
        }
        const responseItemGalery = await inserItemGalery(newItemGalery)
        res.send(responseItemGalery)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ItemGalery', e)
    }
}

const deleteItemGalery = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteOneItemGalery(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ItemGalery', e)
    }
}

export { getItemGalery, getAllGalery, updateItemGalery, postItemGalery, deleteItemGalery }