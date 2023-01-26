import { Request, Response } from "express";
import { RequestExt } from "../interface/req-ext";
import { handleHttp } from "../utils/error.handle";



const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "ESTO SOLO LO VEN LAS PERSONAS CON SESION / JWT",
            user: req.user
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ORDERS', e)
    }
}

export { getOrders }