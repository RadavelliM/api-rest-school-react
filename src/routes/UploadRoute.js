import { Router } from "express";

import UploadController from "../controllers/UploadController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, UploadController.create);

export default router;
