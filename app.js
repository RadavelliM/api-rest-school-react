import dotenv from "dotenv";
import path from "path";
dotenv.config(path.resolve(__dirname, ".env"));

import express from "express";

import homeRoute from "./src/routes/homeRoute";
import alunoRoute from "./src/routes/alunoRoute";
import usuarioRoute from "./src/routes/usuarioRoute";
import JWTRoute from "./src/routes/JWTRoute";
import UploadRoute from "./src/routes/UploadRoute";

import "./src/database/modelConnection";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(path.resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", homeRoute);
    this.app.use("/aluno/", alunoRoute);
    this.app.use("/usuario/", usuarioRoute);
    this.app.use("/tokens/", JWTRoute);
    this.app.use("/upload/", UploadRoute);
  }
}

export default new App().app;
