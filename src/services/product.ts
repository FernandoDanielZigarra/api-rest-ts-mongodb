import { Product } from "../interface/product.interface"
import ProductModel from "../models/product"

const inserProduct = async (product: Product) => {
    const responseInsert = await ProductModel.create(product);
    return responseInsert
}

const getProducts = async () => {
    const responseProducts = await ProductModel.find({})
    return responseProducts
}

const findProduct = async (id: string) => {
    const responseProduct = await ProductModel.findOne({ _id: id })
    return responseProduct
}

const editProduct = async (id: string, data: Product) => {
    const responseProduct = await ProductModel.findOneAndUpdate({ _id: id }, data, { new: true }); //new:true devuelve el objeto actualizado
    return responseProduct
}

const deleteOneProduct = async (id: string) => {
    const responseProduct = await ProductModel.remove({ _id: id })
    return responseProduct
}

export { inserProduct, getProducts, findProduct, editProduct, deleteOneProduct }