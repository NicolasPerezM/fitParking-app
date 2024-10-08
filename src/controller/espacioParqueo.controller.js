import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all
export const getEspaciosParqueo = async(req, res, next) => {
    try{
        const rta = await models.EspacioParqueo.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay espacios creados');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//read by Id 
export const getEspacioParqueoById = async(req, res, next) => {
    try{
        const { id } = req.params;
        const rta = await models.EspacioParqueo.findOne({where: {id: id}});
        if(!rta){
            throw boom.notFound('Espacio no encontrado');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//create 

const createEspacioParqueo = async(req, res, next) => {
    try{
        const { estado } = req.body;
        const data = { estado }
        const newEspacioParqueo = await models.EspacioParqueo.create(data);
        if(!newEspacioParqueo){
            throw boom.badRequest('Espacio no creado');
        }
        res.status(201).json(newEspacioParqueo);
    }
    catch(err){
        next(err);
    }
}

//update

const updateEspacioParqueo = async(req, res, next) => {
    try{
        const { id } = req.params;
        const { estado } = req.body;

        const updateEspacioParqueo = {
            ...(estado && {estado})
        }

        if(Object.keys(updateEspacioParqueo).length === 0){
            throw boom.badRequest('No hay campos para actualizar');
        }

        const rta = await models.EspacioParqueo.update(updateEspacioParqueo, {where: {id: id}});
        if(!rta){
            throw boom.badRequest('Espacio no actualizado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}

//delete

const deleteHistorialParqueo = async(req, res, next) => {
    try{
        const { id } = req.params;
        const rta = await models.EspacioParqueo.destroy({where: {id: id}});
        if(!rta){
            throw boom.notFound('Espacio no encontrado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}

export const methodsEspacioParqueo = {
    getEspaciosParqueo,
    getEspacioParqueoById,
    createEspacioParqueo,
    updateEspacioParqueo,
    deleteHistorialParqueo
}