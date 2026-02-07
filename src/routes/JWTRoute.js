import { Router } from "express";
import JWTController from "../controllers/JWTController";

const router = new Router();

router.post("/", JWTController.create);

export default router;
