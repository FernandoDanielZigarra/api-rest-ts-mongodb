import { Router } from "express";
import { loginController, registerController } from "../controllers/auth";

const router = Router()

router.post('/login', loginController)
        .post('/register', registerController)


export { router }