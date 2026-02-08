import { Router } from "express";
import AlunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", AlunoController.index);
router.get("/:id", AlunoController.show);

// rotas com necessidade de login
router.post("/", loginRequired, AlunoController.create);
router.put("/:id", loginRequired, AlunoController.update);
router.delete("/:id", loginRequired, AlunoController.delete);

export default router;
