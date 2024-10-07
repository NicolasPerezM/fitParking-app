import Joi from "joi";

const idReserva = Joi.number().integer().min(1);
const idUsuario = Joi.number().integer().min(1);
const idVehiculo = Joi.number().integer().min(1);
const idEspacioParqueo = Joi.number().integer().min(1);
const fechaInicio = Joi.date();
const fechaFin = Joi.date();
const estadoReserva = Joi.string();

export const createReservaSchema = Joi.object({
    idUsuario: idUsuario.required(),
    idVehiculo: idVehiculo.required(),
    idEspacioParqueo: idEspacioParqueo.required(),
    fechaInicio: fechaInicio.required(),
    fechaFin: fechaFin.required(),
    estadoReserva: estadoReserva.required()
});

export const updateReservaSchema = Joi.object({
    idUsuario: idUsuario,
    idVehiculo: idVehiculo,
    idEspacioParqueo: idEspacioParqueo,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    estadoReserva: estadoReserva
});

export const getReservaSchema = Joi.object({
    idReserva: idReserva.required(),
});
