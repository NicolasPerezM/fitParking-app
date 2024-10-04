import { Usuario, userSchema } from './usuario.model.js';
import { Vehiculos, vehiculosSchema } from './vehiculos.model.js';
import { Lote, loteSchema } from './lote.model.js';
import { EspacioParqueo, espacioParqueoSchema } from './espacioParqueo.model.js'; 
import { reservaSchema, Reserva } from './reservas.model.js';  

function setUpModels(sequelize){
    Usuario.init(userSchema, Usuario.config(sequelize));
    Vehiculos.init(vehiculosSchema, Vehiculos.config(sequelize));
    Lote.init(loteSchema, Lote.config(sequelize));
    EspacioParqueo.init(espacioParqueoSchema, EspacioParqueo.config(sequelize));
    Reserva.init(reservaSchema, Reserva.config(sequelize));


    Vehiculos.associate(sequelize.models);
    Usuario.associate(sequelize.models);
}

export default setUpModels;