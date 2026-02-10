import multer from "multer";
import multerConfig from "../config/multerConfig";
import Aluno from "../models/aluno";

const upload = multer(multerConfig).single("foto");

import Foto from "../models/foto";

class UploadController {
  constructor() {}

  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code]
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { id_aluno } = req.body;

        const checkId = await Aluno.findByPk(id_aluno);
        if (!checkId) {
          return res.status(404).json("Aluno nao encontrado");
        }

        const fotoAdicionada = await Foto.create({
          originalname,
          filename,
          id_aluno
        });

        const { id } = fotoAdicionada;
        const fotoInfo = { id, originalname, filename, id_aluno };

        return res.status(201).json(fotoInfo);
      } catch (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    });
  }
}

export default new UploadController();
