import { Schema, Types, model, Model } from 'mongoose'
import { Storage } from '../interface/storage';


const StorageSchema = new Schema<Storage>(
    {
        fileName: {
            type: String
        },
        path: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const StorageModel = model('storages', StorageSchema);
export default StorageModel;