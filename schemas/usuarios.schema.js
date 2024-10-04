import Joi from "joi";

const idUsuarios = Joi.number().integer().min(1);
const Nombres = Joi.string().min(3).max(100);
const Apellidos = Joi.string().min(3).max(100);
const CorreoElectronico = Joi.string().email();
const Contrasena = Joi.string().min(3).max(100);
const Telefono = Joi.string().max(100);
const rol = Joi.string().max(100);

export const createUserSchema = Joi.object({
    Nombres: Nombres.required(),
    Apellidos: Apellidos.required(),
    CorreoElectronico: CorreoElectronico.required(),
    Contrasena: Contrasena.required(),
    Telefono: Telefono.required(),
    rol: rol
});

export const updateUserSchema = Joi.object({
    Nombres: Nombres,
    Apellidos: Apellidos,
    CorreoElectronico: CorreoElectronico,
    Contrasena: Contrasena,
    Telefono: Telefono,
    rol: rol
});

export const getUserSchema = Joi.object({
    id: idUsuarios.required(),
});
