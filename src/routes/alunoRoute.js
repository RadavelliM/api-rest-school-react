import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const router = new Router();

router.post("/", AlunoController.create);

export default router;
