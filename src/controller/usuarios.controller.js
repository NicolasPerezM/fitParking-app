//import pool from '../database/database.js';
import boom from "@hapi/boom";
import sequelize from "../../libs/sequelize.js";
import { models } from "../../libs/sequelize.js";
import bcrypt from "bcrypt";

//read all
export const getUsers = async (req, res, next) => {
  try {
    const rta = await models.Usuario.findAll();
    if (rta.length === 0) {
      throw boom.notFound("No hay usuarios");
    }
    res.status(201).json(rta);
  } catch (err) {
    next(err);
  }
};

// Esta función no depende de `req`, `res` o `next`, solo busca el usuario por email
export const findByEmail = async (CorreoElectronico) => {
  try {
    const user = await models.Usuario.findOne({
      where: { CorreoElectronico: CorreoElectronico },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

//read by ID
export const getUserById = async (req, res, next) => {
  try {
    const { idUsuario } = req.params;
    const rta = await models.Usuario.findByPk(idUsuario, {
      include: ["vehiculos"],
    });
    if (!rta) {
      throw boom.notFound("Ususario no encontrado");
    }
    res.status(200).json(rta);
  } catch (err) {
    next(err);
  }
};

//create
export const createUser = async (req, res, next) => {
  try {
    const { Nombres, Apellidos, CorreoElectronico, Contrasena, Telefono, rol } =
      req.body;
    const hashedPassword = await bcrypt.hash(Contrasena, 10);
    const data = {
      Nombres,
      Apellidos,
      CorreoElectronico,
      Contrasena: hashedPassword,
      Telefono,
      rol,
    };
    const newUser = await models.Usuario.create(data);
    if (!newUser) {
      throw boom.notFound("Usuario no creado");
    }
    delete newUser.dataValues.Contrasena;
    //res.status(201).json(newUser);
    if (rol === "usuario") {
      res.redirect("/api/v1/usuarios/dashboardUser");
    } else {
      res.redirect("/api/v1/usuarios/seccion-usuarios");
    }
  } catch (err) {
    next(err);
  }
};

//delete

export const deleteUser = async (req, res, next) => {
  try {
    const { idUsuario } = req.params;
    const rta = await models.Usuario.destroy({
      where: { idUsuario: idUsuario },
    });
    if (!rta) {
      throw boom.notFound("Usuario no encontrado");
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

//update

export const updateUser = async (req, res, next) => {
  try {
    const { idUsuario } = req.params;
    const { Nombres, Apellidos, CorreoElectronico, Telefono } = req.body;
    const data = { Nombres, Apellidos, CorreoElectronico, Telefono };
    const updateUser = await models.Usuario.update(data, {
      where: { idUsuario: idUsuario },
    });
    if (!updateUser) {
      throw boom.badRequest("Usuario no actualizado");
    } else {
        res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

export const methods = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  findByEmail,
};
