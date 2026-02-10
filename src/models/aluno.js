import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo "nome" deve ter entre 3 e 255 caracteres.'
            },
            isAlpha: {
              msg: "nome nao pode ser numero"
            }
          }
        },

        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [2, 255],
              msg: 'Campo "sobrenome" deve ter entre 2 e 255 caracteres.'
            },

            isAlpha: {
              msg: "sobrenome nao pode ser numero"
            }
          }
        },

        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isEmail: {
              args: [6, 255],
              msg: "Email inválido."
            }
          },
          unique: {
            msg: "Email já cadastrado no sistema"
          }
        },

        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            len: {
              args: [1, 3],
              msg: "a idade do aluno deve conter no minimo 1 número e no máximo 3 números"
            },
            isNumeric: {
              msg: "idade precisa ser um numero"
            },
            isInt: {
              msg: "idade precisa ser um numero inteiro"
            }
          }
        },

        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            len: {
              args: [1, 6],
              msg: "o peso do aluno deve conter no minimo 1 número e no máximo 6 números"
            },
            isNumeric: {
              msg: "peso precisa ser um numero"
            }
          }
        },

        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            len: {
              args: [1, 4],
              msg: "a altura do aluno deve conter no minimo 1 número e no máximo 4 números"
            },
            isNumeric: {
              msg: "altura precisa ser um numero"
            }
          }
        }
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "id_aluno" });
  }
}
