import Joi from "joi";

const idLote = Joi.number().integer().min(1);
const nombreLote = Joi.string().min(2).max(100);
const ubicacion = Joi.string().min(2).max(100);
const capacidad = Joi.number().integer().min(1);

export const createLoteSchema = Joi.object({
    nombreLote: nombreLote.required(),
    ubicacion: ubicacion.required(),
    capacidad: capacidad.required()
});

export const updateLoteSchema = Joi.object({
    nombreLote: nombreLote,
    ubicacion: ubicacion,
    capacidad: capacidad
});

export const getLoteSchema = Joi.object({
    idLote: idLote.required(),
})