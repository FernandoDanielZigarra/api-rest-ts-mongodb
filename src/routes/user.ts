import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, updateUser } from "../controllers/user";

const router = Router()

router.get('/', getUsers)
        .post('/', postUser)
        .get('/:id', getUser)
        .put('/:id', updateUser)
        .delete('/:id', deleteUser)

export { router }