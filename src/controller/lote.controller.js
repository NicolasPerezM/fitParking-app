import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all
export const getLotes = async(req, res, next) => {
    try{
        const rta = await models.Lote.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay lotes');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//read by Id

const getLote = async(req, res, next) => {
    try {
        const { idLote } = req.params;
        const rta = await models.Lote.findByPk(idLote);
        if(!rta){
            throw boom.notFound('Lote no encontrado');
        }
        res.status(201).json(rta);
    }
    catch(err) {
        next(err)
    }
}

//create 
const createLote = async(req, res, next) => {
    try{
        const { nombreLote, ubicacion, capacidad} = req.body;
        const data = {nombreLote, ubicacion, capacidad}
        const newLote = await models.Lote.create(data);
        if(!newLote){
            throw boom.badRequest('Lote no creado');
        }
        res.status(201).json(newLote);
    }
    catch(err){
        next(err);
    }
}
//delete 

const deleteLote = async(req, res, next) => {
    try{
        const { idLote } = req.params;
        const rta = await models.Lote.destroy({where: {idLote: idLote}});
        if(!rta){
            throw boom.notFound('Lote no eliminado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}


//update

const updateLote = async(req, res, next) => {
    try{
        const { idLote } = req.params;
        const { nombreLote, ubicacion, capacidad} = req.body;
        const data = {nombreLote, ubicacion, capacidad}
        const updatedLote = await models.Lote.update(data, {
            where: {idLote: idLote}
        });
        if(!updatedLote){
            throw boom.notFound('Lote no actualizado');
        }
        res.status(201).json({
            message: 'Lote actualizado',
        });
    }
    catch(err){
        next(err);
    }
}



export const methodsLote = {
    getLotes,
    createLote,
    getLote,
    deleteLote,
    updateLote
}