import { Product } from "../interface/product.interface"
import SaleModel from "../models/sale"

const inserSale = async (Sale: Product) => {
    const responseInsert = await SaleModel.create(Sale);
    return responseInsert
}

const getSales = async () => {
    const responseSales = await SaleModel.find({})
    return responseSales
}

const findSale = async (id: string) => {
    const responseSale = await SaleModel.findOne({ _id: id })
    return responseSale
}

const editSale = async (id: string, data: Product) => {
    const responseSale = await SaleModel.findOneAndUpdate({ _id: id }, data, { new: true }); //new:true devuelve el objeto actualizado
    return responseSale
}

const deleteOneSale = async (id: string) => {
    const responseSale = await SaleModel.remove({ _id: id })
    return responseSale
}

export { inserSale, getSales, findSale, editSale, deleteOneSale }