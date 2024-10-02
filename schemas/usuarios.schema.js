import Joi from "joi";

const idUsuarios = Joi.string().uuid();
const Nombres = Joi.string().min(3).max(100);
const Apellidos = Joi.string().min(3).max(100);
const CorreoElectronico = Joi.string().email();
const Direccion = Joi.string().max(100);
const Telefono = Joi.string().max(100);

export const createUserSchema = Joi.object({
    Nombres: Nombres.required(),
    Apellidos: Apellidos.required(),
    CorreoElectronico: CorreoElectronico.required(),
    Direccion: Direccion.required(),
    Telefono: Telefono.required()
});

export const updateUserSchema = Joi.object({
    Nombres: Nombres,
    Apellidos: Apellidos,
    CorreoElectronico: CorreoElectronico,
    Direccion: Direccion,
    Telefono: Telefono
});

export const getUserSchema = Joi.object({
    id: idUsuarios.required(),
});
