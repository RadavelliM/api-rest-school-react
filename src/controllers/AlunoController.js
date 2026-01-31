import aluno from "../models/aluno";

class AlunoController {
  constructor() {}

  async create(req, res) {
    try {
      const newAluno = await aluno.create(req.body); // recebe os dados da requisicao atraves do postman/insomnia
      res.status(201).json(newAluno);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new AlunoController();
