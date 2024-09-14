
import pool from '../database/database.js';
import boom from '@hapi/boom';

//read all
export const getUsers = async (req, res) => {
    try{
        const [result] = await pool.query('SELECT * FROM usuarios');
        res.status(201).json(result);
    }
    catch(err) {
        boom.notFound(err.message);
    }
}

//read by ID
export const getUserById = async (req, res) => {
    try{
        const {id} = req.params;
        const [result] = await pool.query('SELECT * FROM usuarios WHERE idUsuarios = ?', [id]);
        res.status(201).json(result);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

//create
export const createUser = async (req, res) => {
    try{
        const {idUsuarios, Nombres, Apellidos, CorreoElectronico, Direccion, Telefono, FechaDeNacimiento} = req.body;
        const newUser = {idUsuarios, Nombres, Apellidos, CorreoElectronico, Direccion, Telefono, FechaDeNacimiento};
        const [result] = await pool.query('INSERT INTO usuarios SET ?', [newUser]);
        res.status(201).json({id: result.insertId, ...newUser});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

//delete

export const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        const [result] = await pool.query('DELETE FROM usuarios WHERE idUsuarios = ?', [id]);
        if(result.affectedRows === 0) return res.status(404).json({message: 'User not found'});
        res.sendStatus(204);

    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}


//update

export const updateUser = async (req, res) => {
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

        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const methods = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}
