import { Sequelize } from 'sequelize';
import config from '../src/config.js';
import setUpModels from '../db/models/index.js';

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host:  config.host,        // O el host de tu base de datos
  dialect: 'mysql',         // O 'postgres', 'sqlite', 'mariadb', etc.
  logging: true,           // Para desactivar el logging de Sequelize (opcional)
});

setUpModels(sequelize);

sequelize.sync();

export default sequelize;
export const { models } = sequelize;
