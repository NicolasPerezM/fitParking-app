import Joi from "joi";

const idFeedback = Joi.number().integer().min(1);
const idUsuario = Joi.number().integer().min(1);
const comentario = Joi.string();
const fechaCreacion = Joi.date();

export const createFeedbackSchema = Joi.object({
    idUsuario: idUsuario.required(),
    comentario: comentario.required(),
    fechaCreacion: fechaCreacion.required()
});

export const getFeedbackSchema = Joi.object({
    idFeedback: idFeedback.required(),
})