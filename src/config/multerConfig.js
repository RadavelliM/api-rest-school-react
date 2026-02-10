import multer from "multer";
import path from "path";

const randomNumberName = () => Math.round(Math.random() * 10000 + 10000);

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

export default {
  fileFilter: (req, file, cb) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new multer.MulterError("Arquivo invalido. Escolha uma imagem valida.")
      );
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${Date.now()}_${randomNumberName()}${path.extname(file.originalname)}`
      );
    }
  })
};
