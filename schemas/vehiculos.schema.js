import Joi from "joi";

const idVehiculo = Joi.number().integer().min(1);
const marca = Joi.string().min(2).max(100);
const modelo = Joi.string().min(2).max(100);
const color = Joi.string().min(2).max(100);
const placa = Joi.string().min(2).max(100);
const tipoVehiculo = Joi.string().min(2).max(100);
const idUsuario = Joi.number().integer().min(1);

export const createVehicleSchema = Joi.object({
    marca: marca.required(),
    modelo: modelo.required(),
    color: color.required(),
    placa: placa.required(),
    tipoVehiculo: tipoVehiculo.required(),
    idUsuario: idUsuario.required()
});

export const updateVehicleSchema = Joi.object({
    marca: marca,
    modelo: modelo,
    color: color,
    placa: placa,
    tipoVehiculo: tipoVehiculo,
    idUsuario: idUsuario
});

export const getVehicleSchema = Joi.object({
    idVehiculo: idVehiculo.required(),
});

