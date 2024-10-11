import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all
export const getIncidencias = async(req, res, next) => {
    try{
        const rta = await models.Incidencias.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay incidencias');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//read by Id

const getIncidencia = async(req, res, next) => {
    try{
        const { idIncidencia } = req.params;
        const rta = await models.Incidencias.findByPk(idIncidencia);
        if(!rta){
            throw boom.notFound('Incidencia no encontrada');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//create

const createIncidencia = async(req, res, next) => {
    try{
        const { tipoReporte, descripcion } = req.body;
        const data = {tipoReporte, descripcion};
        const newIncidencia = await models.Incidencias.create(data);
        if(!newIncidencia){
            throw boom.badRequest('Incidencia no creada');
        }
        res.status(201).json(newIncidencia);
    }
    catch(err){
        next(err);
    }
}

//delete

const deleteIncidencia = async(req, res, next) => {
    try{
        const { idIncidencia } = req.params;
        const rta = await models.Incidencias.destroy({where: {idIncidencia: idIncidencia}});
        if(!rta){
            throw boom.notFound('Incidencia no eliminada');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}

//update 

const updateIncidencia = async(req, res, next) => {
    try{
        const { idIncidencia } = req.params;
        const { tipoReporte, descripcion } = req.body;
        const data = {tipoReporte, descripcion};
        const updatedIncidencia = await models.Incidencias.update(data, {
            where: {idIncidencia: idIncidencia}
        });
        if(!updatedIncidencia){
            throw boom.notFound('Incidencia no actualizada');
        }
        res.status(201).json({
            message: 'Incidencia actualizada',});
    }
    catch(err){
        next(err);
    }
}

export const methodsIncidencias = {
    getIncidencia,
    getIncidencias,
    createIncidencia,
    deleteIncidencia,
    updateIncidencia
}