import { ItemGalery } from "../interface/galery.interface"
import GaleryModel from "../models/galery"
import * as fs from 'fs'


const inserItemGalery = async (itemGalery: ItemGalery) => {
    const responseInsert = await GaleryModel.create(itemGalery);
    return responseInsert
}

const getItemsGalery = async () => {
    const responseItemGalerys = await GaleryModel.find({})
    return responseItemGalerys
}

const findItemGalery = async (id: string) => {
    const responseItemGalery = await GaleryModel.findOne({ _id: id })
    return responseItemGalery
}

const editItemGalery = async (id: string, data: ItemGalery) => {
    const responseItemGalery = await GaleryModel.findOneAndUpdate({ _id: id }, data, { new: true }); //new:true devuelve el objeto actualizado
    return responseItemGalery
}

const deleteOneItemGalery = async (id: string) => {
    const savePath = await GaleryModel.find({ _id: id })
    const responseItemGalery = await GaleryModel.remove({ _id: id })
    fs.unlink(savePath[0].path, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${savePath[0].path} was deleted`);
    })
    return responseItemGalery
}

export { inserItemGalery, getItemsGalery, findItemGalery, editItemGalery, deleteOneItemGalery }