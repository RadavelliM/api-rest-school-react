import multer from "multer";
import multerConfig from "../config/multerConfig";

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

      const { originalname, filename } = req.file;
      const { id_aluno } = req.body;
      const fotoAdicionada = await Foto.create({
        originalname,
        filename,
        id_aluno
      });

      return res.json(fotoAdicionada);
    });
  }
}

export default new UploadController();
