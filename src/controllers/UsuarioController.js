import usuario from "../models/usuario";

class UsuarioController {
  constructor() {}

  async create(req, res) {
    try {
      const newUsuario = await usuario.create(req.body); // recebe os dados da requisicao atraves do postman/insomnia
      const { id, nome, email } = newUsuario;
      const userCredentials = {
        id,
        nome,
        email
      };
      res.status(201).json(userCredentials);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async index(req, res) {
    try {
      const users = await usuario.findAll({
        attributes: ["id", "nome", "email"]
      });

      res.status(200).json(users);
    } catch (e) {
      res.status(500).json("Erro na requisicao: ", e);
    }
  }

  async show(req, res) {
    try {
      const user = await usuario.findByPk(req.params.id);

      if (!user) res.status(404).json("usuario nao encontrado");

      const { id, nome, email } = user;
      const userCredentials = {
        id,
        nome,
        email
      };

      res.status(200).json(userCredentials);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const user = await usuario.findByPk(req.userId);
      if (!user) res.status(404).json("usuario nao encontrado");

      const updateUser = await user.update(req.body);
      const { id, nome, email } = updateUser;
      const userCredentials = {
        id,
        nome,
        email
      };
      res.status(200).json(userCredentials);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await usuario.findByPk(req.userId);
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
