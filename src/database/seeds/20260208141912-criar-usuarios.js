"use strict";

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nome: "juliana",
          email: "juliana@gmail.com",
          password_hash: await bcrypt.hash("123456", 10),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down() {}
};
