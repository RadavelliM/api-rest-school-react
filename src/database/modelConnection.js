import { Sequelize } from "sequelize";
import databaseConfig from "../config/databaseConfig";

import aluno from "../models/aluno";
import usuario from "../models/usuario";

const conncetion = new Sequelize(databaseConfig);

const models = [aluno, usuario];
models.forEach((model) => model.init(conncetion));
