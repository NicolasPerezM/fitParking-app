import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all 

const getReservas = async(req, res, next) => {
    try{
        const rta = await models.Reserva.findAll({
            include: ['Usuario']
        });
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
        const { idReserva } = req.params;
        const rta = await models.Reserva.findByPk(idReserva, {
            include: ['Usuario']
        });
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
        const {fechaInicio, fechaFin, estadoReserva, idUsuario} = req.body;
        const data = {fechaInicio, fechaFin, estadoReserva, idUsuario};
        const newReserva = await models.Reserva.create(data);
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
        const { idReserva } = req.params;
        const rta = await models.Reserva.destroy({
            where: { idReserva:idReserva }
        });
        if(!rta){
            throw boom.notFound('Reserva no encontrada')
        }
        res.sendStatus(204)
    }
    catch(err){
        next(err);
    }
}

//update

const updateReserva = async (req, res, next) => {
    try {
        const { idReserva } = req.params;
        const { fechaInicio, fechaFin, estadoReserva } = req.body;
        const data = { fechaInicio, fechaFin, estadoReserva };
        const updateVehicle = await models.Reserva.update(data, {
            where: { idReserva: idReserva }
        });
        if (!updateVehicle) {
            throw boom.badRequest('Reserva no actualizada');
        }
        res.status(201).json({
            message: 'Reserva actualizada',
        });
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