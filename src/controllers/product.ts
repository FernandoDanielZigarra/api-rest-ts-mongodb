import { Request, Response } from "express"
import { inserProduct, getProducts, findProduct, editProduct, deleteOneProduct } from "../services/product"
import { handleHttp } from "../utils/error.handle"

const getProduct = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await findProduct(id);
        const data = response ? response : "NOT FOUND"
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_PRODUCT', e)
    }
}

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const response = await getProducts()
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_PRODUCTS', e)
    }
}

const updateProduct = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const reponse = await editProduct(id, body);
        res.send(reponse)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_PRODUCT', e)
    }
}

const postProduct = async ({ body }: Request, res: Response) => {
    try {
        const responseProduct = await inserProduct(body)
        res.send(responseProduct)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_PRODUCT', e)
    }
}

const deleteProduct = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteOneProduct(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_PRODUCT', e)
    }
}

export { getProduct, getAllProducts, updateProduct, postProduct, deleteProduct }