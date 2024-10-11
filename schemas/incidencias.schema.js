import Joi from "joi";

const idIncidencia = Joi.number().integer().min(1);
const idUsuario = Joi.number().integer().min(1);
const tipoReporte = Joi.string();
const fechaGeneracion = Joi.date();
const descripcion = Joi.string();

export const createIncidenciaSchema = Joi.object({
    //idUsuario: idUsuario.required(),
    tipoReporte: tipoReporte.required(),
    fechaGeneracion: fechaGeneracion,
    descripcion: descripcion.required()
})

export const getIncidenciaSchema = Joi.object({
    idIncidencia: idIncidencia.required(),
})