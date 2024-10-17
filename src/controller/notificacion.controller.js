import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all

const getNotificaciones = async(req, res, next) => {
    try{
        const rta = await models.Notificacion.findAll({
            include: ['Usuario']
        });
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
        const { idNotificacion } = req.params;
        const rta = await models.Notificacion.findByPk(idNotificacion, {
            include: ['Usuario']
        });
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

const createNotificacion = async(req, res, next) => {
    try{
        const {mensaje, tipoNotificacion, idUsuario} = req.body;
        const data = {mensaje, tipoNotificacion, idUsuario};
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
        const { idNotificacion } = req.params;
        const rta = await models.Notificacion.destroy({where: {idNotificacion: idNotificacion}});
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
    getNotificaciones,
    getNotificationById,
    createNotificacion,
    deleteNotificacion
}