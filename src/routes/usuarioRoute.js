import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// ROTAS DESATIVADAS:
router.get("/", loginRequired, UsuarioController.index);
// router.get("/:id", UsuarioController.show);

// rotas ativadas
router.post("/", loginRequired, UsuarioController.create); // rota fechada para criar usuarios para prevenir bot de cadastro após deploy
router.put("/", loginRequired, UsuarioController.update);
router.delete("/", loginRequired, UsuarioController.delete);

export default router;
