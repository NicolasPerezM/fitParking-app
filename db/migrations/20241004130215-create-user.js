'use strict';

import { userSchema, USUARIO_TABLE } from "../models/usuario.model"; 
import { vehiculosSchema, VEHICULOS_TABLE } from "../models/vehiculos.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USUARIO_TABLE, userSchema);
    await queryInterface.createTable(VEHICULOS_TABLE, vehiculosSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(USUARIO_TABLE);
    await queryInterface.drop(VEHICULOS_TABLE);
  }
};
