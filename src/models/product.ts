import { Schema, Types, model, Model } from 'mongoose'
import { Product } from '../interface/product.interface'

const ProductSchema = new Schema<Product>(
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

const ProductModel = model('products', ProductSchema);
export default ProductModel;