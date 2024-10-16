import { Usuario, userSchema } from './usuario.model.js';
import { Vehiculos, vehiculosSchema } from './vehiculos.model.js';
import { Lote, loteSchema } from './lote.model.js';
import { EspacioParqueo, espacioParqueoSchema } from './espacioParqueo.model.js'; 
import { reservaSchema, Reserva } from './reservas.model.js';
import { HistorialParqueo, historialParqueoSchema } from './historialParqueo.model.js';
import { Incidencias, incidenciasSchema } from './incidencias.model.js';
import { Feedback, feedbackSchema } from './feedback.model.js';
import { Pagos, pagosSchema } from './pagos.model.js';
import { Notificacion, notificacionSchema } from './notificacion.model.js';

function setUpModels(sequelize){
    Usuario.init(userSchema, Usuario.config(sequelize));
    Vehiculos.init(vehiculosSchema, Vehiculos.config(sequelize));
    Lote.init(loteSchema, Lote.config(sequelize));
    EspacioParqueo.init(espacioParqueoSchema, EspacioParqueo.config(sequelize));
    Reserva.init(reservaSchema, Reserva.config(sequelize));
    HistorialParqueo.init(historialParqueoSchema, HistorialParqueo.config(sequelize));
    Incidencias.init(incidenciasSchema, Incidencias.config(sequelize));
    Feedback.init(feedbackSchema, Feedback.config(sequelize));
    Pagos.init(pagosSchema, Pagos.config(sequelize));
    Notificacion.init(notificacionSchema, Notificacion.config(sequelize));

    Vehiculos.associate(sequelize.models);
    Usuario.associate(sequelize.models);
    Reserva.associate(sequelize.models);
    HistorialParqueo.associate(sequelize.models);
}

export default setUpModels;