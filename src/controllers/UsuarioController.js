import usuario from "../models/usuario";

class UsuarioController {
  constructor() {}

  async create(req, res) {
    try {
      const newUsuario = await usuario.create(req.body); // recebe os dados da requisicao atraves do postman/insomnia

      res.status(201).json(newUsuario);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new UsuarioController();
