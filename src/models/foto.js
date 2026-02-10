import Sequelize, { Model } from "sequelize";

import urlConfig from "../config/urlConfig";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo nao pode ser vazio"
            }
          }
        },

        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo nao pode ser vazio"
            }
          }
        },

        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${urlConfig.url}/images/${this.getDataValue("filename")}`;
          }
        }
      },

      { sequelize, tableName: "fotos" }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "id_aluno" });
  }
}
