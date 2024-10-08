import Joi from "joi";

const idNotificacion = Joi.number().integer().min(1);
const idUsuario = Joi.number().integer().min(1);
const mensaje = Joi.string();
const fechaDeEnvio = Joi.date();
const tipoNotificacion = Joi.string();

export const createNotificacionSchema = Joi.object({
    idUsuario: idUsuario.required(),
    mensaje: mensaje.required(),
    fechaDeEnvio: fechaDeEnvio.required(),
    tipoNotificacion: tipoNotificacion.required()
});

export const getNotificacionSchema = Joi.object({
    idNotificacion: idNotificacion.required(),
})

