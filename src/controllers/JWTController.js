import usuario from "../models/usuario";
import jwt from "jsonwebtoken";

class JWTController {
  constructor() {}

  async create(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password)
      return res.status(401).json({
        errors: ["Credenciais invalidas"]
      });

    const user = await usuario.findOne({
      where: {
        email
      }
    });

    if (!user)
      return res.status(401).json({
        errors: ["Usuario nao encontrado"]
      });

    if (!(await usuario.verifyPassword(password, user.password_hash))) {
      return res.status(401).json({
        errors: ["Senha invalida"]
      });
    }

    const { id, nome } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION_TIME
    });

    const Usuario = {id, nome, email}

    res.json({ token, Usuario });
  }
}

export default new JWTController();
