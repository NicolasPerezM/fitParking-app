import Joi from "joi";

const id = Joi.number().integer().min(1);
const idUsuario = Joi.number().integer().min(1);
const idHistorial = Joi.number().integer().min(1);
const monto = Joi.number().integer().min(1);
const fechaCreacion = Joi.date();
const estado = Joi.string();

export const createPagoSchema = Joi.object({
    idUsuario: idUsuario.required(),
    //idHistorial: idHistorial.required(),
    monto: monto.required(),
    //fechaCreacion: fechaCreacion.required(),
    estado: estado.required()
});

export const updatePagoSchema = Joi.object({
    idUsuario: idUsuario,
    idHistorial: idHistorial,
    monto: monto,
    fechaCreacion: fechaCreacion,
    estado: estado
});

export const getPagoSchema = Joi.object({
    idPago: id.required(),
});