import { Schema, Types, model, Model } from 'mongoose'
import { ItemGalery } from '../interface/galery.interface';


const GalerySchema = new Schema<ItemGalery>(
    {
        title: {
            required: true,
            type: String
        },
        description: {
            required: true,
            type: String
        },
        fileName: {
            required: true,
            type: String
        },
        path: {
            required: true,
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const GaleryModel = model('galery', GalerySchema);
export default GaleryModel;