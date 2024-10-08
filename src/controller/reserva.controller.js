import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all 

const getReservas = async(req, res, next) => {
    try{
        const rta = await models.Reservas.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay reservas');
        }
        res.status(201).json(rta);
    }  
    catch(err){
        next(err);
    }
}

//readById

const getReservaById = async(req, res, next) => {
    try{
        const { id } = req.params;
        const rta = await models.Reservas.findOne({where: {id: id}});
        if(!rta) {
            throw boom.notFound('Reserva no encontrada');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//create

const createReserva = async(req, res, next) => {
    try{
        const {fechaInicio, fechaFin, estadoReserva} = req.body;
        const data = {fechaInicio, fechaFin, estadoReserva};
        const newReserva = await models.Reservas.create(data);
        if(!newReserva) {
            throw boom.badRequest('Reserva no creada')
        }
        res.status(201).json(newReserva);
    }
    catch(err){
        next(err);
    }
}

//delete 

const deleteReserva = async(req, res, next) => {
    try{
        const { id } = req.params;
        const rta = await models.Reserva.destroy({where: {id:id}});
        if(!rta){
            throw boom.notFound('Reserva no encontrada')
        }
        res.status(204);
    }
    catch(err){
        next(err);
    }
}

//update

const updateReserva = async(req, res, next) => {
    try{
        const { id } = req.params;
        const { fechaInicio, fechaFin, estadoReserva } = req.body;

        const updateReserva = {
            ...(fechaInicio && {fechaInicio}),
            ...(fechaFin && {fechaFin}),
            ...(estadoReserva && {estadoReserva})
        }

        if(Object.keys(updateReserva).length === 0){
            throw boom.badRequest('No hay campos para actualizar');
        }

        const rta = await models.Reserva.update(updateReserva, {where: {id: id}});
        if(!rta){
            throw boom.notFound('Reserva no encontrada')
        }
        res.status(204);
    }
    catch(err){
        next(err);
    }
}

export const methodsReservas = {
    getReservas,
    getReservaById,
    createReserva,
    deleteReserva,
    updateReserva
}