import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import aluno from "../models/aluno";

const conncetion = new Sequelize(databaseConfig);

const models = [aluno];
models.forEach((model) => model.init(conncetion));
