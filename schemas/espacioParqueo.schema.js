import Joi from "joi";

const idEspacioParqueo = Joi.number().integer().min(1);
const idLote = Joi.number().integer().min(1);
const estado = Joi.string();

export const createEspacioParqueoSchema = Joi.object({
    //idLote: idLote.required(),
    estado: estado.required()
})

export const updateEspacioParqueoSchema = Joi.object({
    idLote: idLote,
    estado: estado
})

export const getEspacioParqueoSchema = Joi.object({
    idEspacioParqueo: idEspacioParqueo.required(),
})


