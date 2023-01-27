import { Request, Response } from "express"
import { inserSale, getSales, findSale, editSale, deleteOneSale } from "../services/sale"
import { handleHttp } from "../utils/error.handle"

const getSale = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await findSale(id);
        const data = response ? response : "NOT FOUND"
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_Sale', e)
    }
}

const getAllSales = async (req: Request, res: Response) => {
    try {
        const response = await getSales()
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_SaleS', e)
    }
}

const updateSale = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const reponse = await editSale(id, body);
        res.send(reponse)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_Sale', e)
    }
}

const postSale = async ({ body }: Request, res: Response) => {
    try {
        const responseSale = await inserSale(body)
        res.send(responseSale)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_Sale', e)
    }
}

const deleteSale = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteOneSale(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_Sale', e)
    }
}

export { getSale, getAllSales, updateSale, postSale, deleteSale }