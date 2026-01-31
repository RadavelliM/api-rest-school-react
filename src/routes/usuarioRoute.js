import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router = new Router();

router.post("/", UsuarioController.create);

export default router;
