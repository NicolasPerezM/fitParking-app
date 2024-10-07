import Joi from "joi";

const idPago = Joi.number().integer().min(1);
const idUsuarios = Joi.number().integer().min(1);
const idHistorial = Joi.number().integer().min(1);
const monto = Joi.number().integer().min(1);
const fechaCreacion = Joi.date();
const estado = Joi.string();

export const createPagoSchema = Joi.object({
    idUsuarios: idUsuarios.required(),
    idHistorial: idHistorial.required(),
    monto: monto.required(),
    fechaCreacion: fechaCreacion.required(),
    estado: estado.required()
});

export const updatePagoSchema = Joi.object({
    idUsuarios: idUsuarios,
    idHistorial: idHistorial,
    monto: monto,
    fechaCreacion: fechaCreacion,
    estado: estado
});

export const getPagoSchema = Joi.object({
    idPago: idPago.required(),
});