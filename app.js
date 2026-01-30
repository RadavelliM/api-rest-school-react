import dotenv from "dotenv";
import path from "path";
dotenv.config(path.resolve(__dirname, ".env"));

import express from "express";
import homeRoute from "./src/routes/homeRoute";

import "./src/database/connection";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoute);
  }
}

export default new App().app;
