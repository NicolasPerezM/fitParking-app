import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all 

const getHistorialParqueo = async(req, res, next) => {
    try{
        const rta = await models.HistorialParqueo.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay historial de parqueo');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//read by Id

const getHistorialParqueoById = async(req, res, next) => {
    try{
        const { idHistorialParqueo } = req.params;
        const rta = await models.HistorialParqueo.findByPk(idHistorialParqueo);
        if(!rta){
            throw boom.notFound('Historial de parqueo no encontrado');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//create

const createHistorialParqueo = async(req, res, next) => {
    try{
        const { tipoIngreso } = req.body;
        const data = { tipoIngreso };
        const newHistorialParqueo = await models.HistorialParqueo.create(data);
        if(!newHistorialParqueo){
            throw boom.badRequest('Historial de parqueo no creado');
        }
        res.status(201).json(newHistorialParqueo);
    }
    catch(err){
        next(err);
    }
}

//delete 

const deleteHistorialParqueo = async(req, res, next) => {
    try{
        const { idHistorialParqueo } = req.params;
        const rta = await models.HistorialParqueo.destroy({
            where: { idHistorialParqueo: idHistorialParqueo }
        });
        if(!rta){
            throw boom.notFound('Historial de parqueo no encontrado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}

export const methodsHistorialParqueo = {
    getHistorialParqueo,
    getHistorialParqueoById,
    createHistorialParqueo,
    deleteHistorialParqueo
}