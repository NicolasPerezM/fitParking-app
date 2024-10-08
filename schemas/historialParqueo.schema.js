import Joi from "joi";

const idHistorial = Joi.number().integer().min(1);
const idUsuario = Joi.number().integer().min(1);
const idVehiculo = Joi.number().integer().min(1);
const idEspacioParqueo = Joi.number().integer().min(1);
const fechaEntrada = Joi.date();
const fechaSalida = Joi.date();
const tipoIngreso = Joi.string();

export const createHistorialParqueoSchema = Joi.object({
    idUsuario: idUsuario.required(),
    idVehiculo: idVehiculo.required(),
    idEspacioParqueo: idEspacioParqueo.required(),
    fechaEntrada: fechaEntrada.required(),
    fechaSalida: fechaSalida.required(),
    tipoIngreso: tipoIngreso.required()
});

export const updateHistorialParqueoSchema = Joi.object({
    idUsuario: idUsuario,
    idVehiculo: idVehiculo,
    idEspacioParqueo: idEspacioParqueo,
    fechaEntrada: fechaEntrada,
    fechaSalida: fechaSalida,
    tipoIngreso: tipoIngreso
});

export const getHistorialParqueoSchema = Joi.object({
    idHistorial: idHistorial.required(),
})