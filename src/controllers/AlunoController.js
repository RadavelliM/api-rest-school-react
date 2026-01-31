import aluno from "../models/aluno";

class AlunoController {
  constructor() {}

  async create(req, res) {
    const newAluno = await aluno.create(req.body); // recebe os dados da requisicao atraves do postman/insomnia

    res.status(201).json(newAluno);
  }
}

export default new AlunoController();
