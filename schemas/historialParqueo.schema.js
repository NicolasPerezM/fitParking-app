import Joi from "joi";

const idHistorialParqueo = Joi.number().integer().min(1);
const idUsuario = Joi.number().integer().min(1);
const idVehiculo = Joi.number().integer().min(1);
const idEspacioParqueo = Joi.number().integer().min(1);
const fechaEntrada = Joi.date();
const fechaSalida = Joi.date();
const isRegistered = Joi.boolean();
const isReserved = Joi.boolean();
const placa = Joi.string();
const tipoVehiculo = Joi.string();


export const createHistorialParqueoSchema = Joi.object({
    idUsuario: idUsuario,
    idVehiculo: idVehiculo,
    idEspacioParqueo: idEspacioParqueo.required(),
    fechaEntrada: fechaEntrada,
    fechaSalida: fechaSalida,
    isRegistered: isRegistered.required(),
    isReserved: isReserved.required(),
    placa: placa.required(),
    tipoVehiculo: tipoVehiculo.required(),
});

export const updateHistorialParqueoSchema = Joi.object({
    idUsuario: idUsuario,
    idVehiculo: idVehiculo,
    idEspacioParqueo: idEspacioParqueo,
    fechaEntrada: fechaEntrada,
    fechaSalida: fechaSalida,
});

export const getHistorialParqueoSchema = Joi.object({
    idHistorialParqueo: idHistorialParqueo.required(),
})

