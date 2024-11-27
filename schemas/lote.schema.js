import Joi from "joi";

const idLote = Joi.number().integer().min(1);
const nombreLote = Joi.string().min(2).max(100);
const ubicacion = Joi.string().min(2).max(100);
const capacidad = Joi.number().integer().min(1);
const tipoLote = Joi.string().min(1);
const precioPorHora = Joi.number().integer();


export const createLoteSchema = Joi.object({
    nombreLote: nombreLote.required(),
    ubicacion: ubicacion.required(),
    capacidad: capacidad.required(),
    tipoLote: tipoLote.required(),
    precioPorHora: precioPorHora.required()
});

export const updateLoteSchema = Joi.object({
    nombreLote: nombreLote,
    ubicacion: ubicacion,
    capacidad: capacidad
});

export const getLoteSchema = Joi.object({
    idLote: idLote.required(),
})