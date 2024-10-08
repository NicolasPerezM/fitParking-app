import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all

const getNotificacion = async(req, res, next) => {
    try{
        const rta = await models.Notificacion.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay notificaciones');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//read by id

const getNotificationById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const rta = await models.Notificacion.findOne({where: {id: id}});
        if(!rta){
            throw boom.notFound('Notificacion no encontrada');
        }
        res.status(201).json(rta);
    } 
    catch(err){
        next(err);
    }
}


// create

const createNorificacion = async(req, res, next) => {
    try{
        const {mensaje, tipoNotificacion} = req.body;
        const data = {mensaje, tipoNotificacion};
        const newNotificacion = await models.Notificacion.create(data);
        if(!newNotificacion){ 
            throw boom.badRequest('Notificacion no creada');
        }
        res.status(201).json(newNotificacion);
    }
    catch(err){
        next(err)
    }
}

//delete 

const deleteNotificacion = async(req, res, next) => {
    try{
        const { id } = req.params;
        const rta = await models.Notificacion.destroy({where: {id: id}});
        if(!rta){
            throw boom.badRequest('Notificacion no eliminada');
        }
        res.sendStatus(204);

    }
    catch(err){
        next(err);
    }
}

export const methodsNotificacion = {
    getNotificacion,
    getNotificationById,
    createNorificacion,
    deleteNotificacion
}