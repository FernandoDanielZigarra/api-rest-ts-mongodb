import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE_GALERY = `${process.cwd()}/storage/galery`;

const storage = diskStorage({
    destination(req: Request, file: Express.Multer.File, cb: any) {
        cb(null, PATH_STORAGE_GALERY);
    },
    filename(req: Request, file: Express.Multer.File, cb: any) {
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    },
});


const multerMiddleware = multer({ storage });

export default multerMiddleware;