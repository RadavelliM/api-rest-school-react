import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class Usuario extends Model {
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
              msg: "nome nao pode ser um numero"
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

        password_hash: {
          type: Sequelize.STRING,
          defaultValue: ""
        },

        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: 'Campo "senha" deve ter entre 6 e 50 caracteres.'
            },

            is: {
              args: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
              msg: "Senha precisa ter numeros e caracteres"
            }
          }
        }
      },
      { sequelize }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });
    return this;
  }

  static verifyPassword(password, password_hash) {
    return bcrypt.compare(password, password_hash);
  }
}
