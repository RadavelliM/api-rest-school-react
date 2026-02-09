import { Router } from "express";

import UploadController from "../controllers/UploadController";

const router = new Router();

router.post("/", UploadController.create);

export default router;
