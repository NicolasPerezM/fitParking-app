import { Usuario, userSchema } from './usuario.model.js';
import { Vehiculos, vehiculosSchema } from './vehiculos.model.js';

function setUpModels(sequelize){
    Usuario.init(userSchema, Usuario.config(sequelize));
    Vehiculos.init(vehiculosSchema, Vehiculos.config(sequelize));
}

export default setUpModels;