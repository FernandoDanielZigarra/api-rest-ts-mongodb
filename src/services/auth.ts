import { Auth } from "../interface/auth.interface"
import { User } from "../interface/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcryptjs.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({ email, password, firstName, lastName }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) {
        return "El usuario ya se encuentra registrado"
    }
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passHash, firstName, lastName });
    return registerNewUser;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) {
        return "Credenciales invalidas"
    }
    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)

    if (!isCorrect) return "Password incorrecto"

    const token = generateToken(checkIs.email)
    const data = {
        token,
        user: checkIs
    }
    return data
}

export { registerNewUser, loginUser }