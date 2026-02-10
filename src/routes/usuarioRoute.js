import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// ROTAS DESATIVADAS:
// router.get("/", loginRequired, UsuarioController.index);
// router.get("/:id", UsuarioController.show);

// ROTAS ATIVAS:

/*
    a rota de criacao de contas fica aberto nos commits para o repositorio, mas para o deploy
    sera fechada devido a bots que podem usar a api e encher o banco de dados
*/
router.post("/", UsuarioController.create);
router.put("/", loginRequired, UsuarioController.update);
router.delete("/", loginRequired, UsuarioController.delete);

export default router;
