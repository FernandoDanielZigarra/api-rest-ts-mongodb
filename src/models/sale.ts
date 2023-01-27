import { Schema, Types, model, Model } from 'mongoose'
import { Product } from '../interface/product.interface'

const SaleSchema = new Schema<Product>(
    {
        title: {
            type: String,
            required:true,
        },
        description: {
            type: String,
            required:true,
        },
        price: {
            type: Number,
            required:true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const SaleModel = model('sales', SaleSchema);
export default SaleModel;