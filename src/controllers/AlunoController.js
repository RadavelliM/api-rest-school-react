import aluno from "../models/aluno";
import foto from "../models/foto";

class AlunoController {
  constructor() {}

  async index(req, res) {
    const alunos = await aluno.findAll({
      attributes: [
        "id",
        "nome",
        "sobrenome",
        "email",
        "idade",
        "peso",
        "altura"
      ],
      order: [
        ["id", "DESC"],
        [foto, "id", "DESC"]
      ],
      include: {
        model: foto,
        attributes: ["id", "originalname", "filename", "url"]
      }
    });

    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["ID invalido"] });
      }

      const estudante = await aluno.findByPk(id, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura"
        ],
        order: [
          ["id", "DESC"],
          [foto, "id", "DESC"]
        ],
        include: {
          model: foto,
          attributes: ["id", "originalname", "filename", "url"]
        }
      });

      if (!estudante) {
        return res.status(404).json({ errors: ["Aluno nao encontrado"] });
      }

      return res.json(estudante);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async create(req, res) {
    try {
      const newAluno = await aluno.create(req.body);
      const { idEstudante, nome, sobrenome, email, idade, peso, altura } =
        newAluno;
      const informacoesEstudante = {
        idEstudante,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura
      };
      res.status(201).json(informacoesEstudante);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["ID invalido"] });
      }

      const estudante = await aluno.findByPk(id);

      if (!estudante) {
        return res.status(404).json({ errors: ["Aluno nao encontrado"] });
      }

      const novoAluno = await estudante.update(req.body);

      const { nome, sobrenome, email, idade, peso, altura } = novoAluno;
      const informacoesEstudante = {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura
      };

      return res.json(informacoesEstudante);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["ID invalido"] });
      }

      const estudante = await aluno.findByPk(id);

      if (!estudante) {
        return res.status(404).json({ errors: ["Aluno nao encontrado"] });
      }

      await estudante.destroy();

      return res.status(200).json("Excluido com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new AlunoController();
