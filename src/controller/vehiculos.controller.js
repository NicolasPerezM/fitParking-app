import boom from '@hapi/boom';
import sequelize from '../../libs/sequelize.js';
import { models } from '../../libs/sequelize.js';

//read all 

const getVehicles = async(req, res, next) => {
    try {
        const rta = await models.Vehiculos.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay vehiculos');
        }
        res.status(201).json(rta);
    } 
    catch(err){
        next(err)
    }
    
};


//read by id
const getVehicleById = async(req, res, next) => {
    try{
        const { id } = req.params;
        const rta = await models.Vehiculos.findOne({where: {id: id}});
        if(!rta){
            throw boom.notFound('Vehiculo no encontrado');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err)
    }
};

//create
const createVehicle = async(req, res, next) => {
    try {
        const { marca, modelo, color, placa, tipoVehiculo } = req.body;
        const data = { marca, modelo, color, placa, tipoVehiculo };
        const newVehicle = await models.Vehiculos.create(data);
        if(!newVehicle){
            throw boom.badRequest('Vehiculo no creado');
        }
        res.status(201).json(newVehicle);
    }
    catch(err){
        next(err)
    }
};

//delete 
const deleteVehicle = async(req, res, next) => {
    try{
        const { id } = req.params;
        const rta = await models.Vehiculos.destroy({where: {id: id}})
        if(!rta){
            throw boom.notFound('Vehiculo no encontrado');
        }
        res.sendStatus(204);

    }
    catch(err){
        next(err);
    }
};

//update
const updateVehicle = async(req, res, next) => {
    try{
        const { id } = req.params;
        const { marca, modelo, color, placa, tipoVehiculo } = req.body;
        const data = { marca, modelo, color, placa, tipoVehiculo };
        const updateVehicle = await models.Vehiculos.update(data, {where: {id: id}});
        if(!updateVehicle){
            throw boom.badRequest('Vehiculo no actualizado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
};


export const methodsVehicles = {
    getVehicles,
    getVehicleById,
    createVehicle,
    deleteVehicle,
    updateVehicle
};