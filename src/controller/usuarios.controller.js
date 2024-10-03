
import pool from '../database/database.js';
import boom from '@hapi/boom';


//read all
export const getUsers = async (req, res, next) => {
    try{
        const [result] = await pool.query('SELECT * FROM usuarios');
        if (result.length === 0) {
            throw boom.notFound('No hay usuarios');
        }
        res.status(201).json(result);
    }
    catch(err) {
        next(err);
    }
}

//read by ID
export const getUserById = async (req, res, next) => {
    try{
        const {id} = req.params;
        const [result] = await pool.query('SELECT * FROM usuarios WHERE idUsuarios = ?', [id]);
        if (result.length === 0) {
           throw boom.notFound('Ususario no encontrado');
        }

        res.status(200).json(result);
    }
    catch(err) {
        next(err);
    }
}

//create
export const createUser = async (req, res, next) => {
    try{
        console.log(req.body);
        const {idUsuarios, Nombres, Apellidos, CorreoElectronico, Direccion, Telefono} = req.body;
        const newUser = {idUsuarios, Nombres, Apellidos, CorreoElectronico, Direccion, Telefono};
        const [result] = await pool.query('INSERT INTO usuarios SET ?', [newUser]);
        if(result.affectedRows === 0) {
            throw boom.notFound('Usuario no creado');
        }
        res.status(201).json({id: result.insertId, ...newUser});
    }
    catch(err){
        next(err);
    }
}

//delete

export const deleteUser = async (req, res, next) => {
    try{
        const {id} = req.params;
        const [result] = await pool.query('DELETE FROM usuarios WHERE idUsuarios = ?', [id]);
        if(result.affectedRows === 0) {
            throw boom.notFound('Usuario no encontrado');
        }
        res.sendStatus(204);

    }
    catch(err) {
        next(err);
    }
}


//update

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { Nombres, Apellidos, CorreoElectronico, Direccion, Telefono, FechaDeNacimiento } = req.body;

        // Crear un objeto con solo los campos definidos usando el operador de propagación
        const updateUser = {
            ...(Nombres && { Nombres }),
            ...(Apellidos && { Apellidos }),
            ...(CorreoElectronico && { CorreoElectronico }),
            ...(Direccion && { Direccion }),
            ...(Telefono && { Telefono }),
            ...(FechaDeNacimiento && { FechaDeNacimiento })
        };

        // Verificar que haya al menos un campo para actualizar
        if (Object.keys(updateUser).length === 0) {
            return res.status(400).json({ message: "No hay campos para actualizar" });
        }

        // Ejecutar la consulta de actualización
        const [result] = await pool.query('UPDATE usuarios SET ? WHERE idUsuarios = ?', [updateUser, id]);
        if(result.affectedRows === 0) {
            throw boom.badRequest('Usuario no actualizado');
        }

        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};


export const methods = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}
