import aluno from "../models/aluno";

class HomeController {
  constructor() {}

  async index(req, res) {
    const newAluno = await aluno.create({
      nome: "teste",
      sobrenome: "algumaCoisa",
      email: "teste@gmail.com",
      idade: 20,
      peso: 68.15,
      altura: 1.8
    });

    res.status(200).json(newAluno);
  }
}

export default new HomeController();
