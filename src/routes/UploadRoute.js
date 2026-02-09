import { Router } from "express";
import multer from "multer";

import UploadController from "../controllers/UploadController";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig);

const router = new Router();

router.post("/", upload.single("foto"), UploadController.create);

export default router;
