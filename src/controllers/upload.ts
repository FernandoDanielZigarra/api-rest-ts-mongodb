import { Request, Response } from "express"
import { RequestExt } from "../interface/req-ext"
import { Storage } from "../interface/storage"
import { registerUpload } from "../services/storage"
import { handleHttp } from "../utils/error.handle"

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.email}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataToRegister)
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR UPLOAD IMAGE", e)
    }
}

export { getFile }