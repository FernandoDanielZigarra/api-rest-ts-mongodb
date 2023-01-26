import { Schema, Types, model, Model } from 'mongoose'
import { User } from '../interface/user.interface';


const UserSchema = new Schema<User>(
    {
        firstName: {
            required: true,
            type: String
        },
        lastName: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        password: {
            required: true,
            type: String,
            unique: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const UserModel = model('users', UserSchema);
export default UserModel;