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

  async index(req, res) {
    try {
      const users = await usuario.findAll();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json("Erro na requisicao: ", e);
    }
  }

  async show(req, res) {
    try {
      const user = await usuario.findByPk(req.params.id);
      if (!user) res.status(404).json("usuario nao encontrado");
      res.status(200).json(user);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) res.status(400).json("ID inválido");

      const user = await usuario.findByPk(req.params.id);
      if (!user) res.status(404).json("usuario nao encontrado");

      const updateUser = await user.update(req.body);
      res.status(200).json(updateUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) res.status(400).json("ID inválido");

      const user = await usuario.findByPk(req.params.id);
      if (!user) res.status(404).json("usuario nao encontrado");

      await user.destroy();
      res.status(200).json("Excluido com sucesso");
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new UsuarioController();
