import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';


//read all 

const getPagos = async(req, res, next) => {
    try{
        const rta = await models.Pagos.findAll({
            include: ['Usuario', 'historialParqueo']
        });
        if(rta.length === 0){
            throw boom.notFound('No hay pagos');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//read by ID

const getPagosbyId = async(req, res, next) => {
    try{
        const { idPago } = req.params;
        const rta = await models.Pagos.findByPk(idPago, {
            include: ['Usuario', 'historialParqueo']}  
        );
        if(!rta){
            throw boom.notFound('Pago no encontrado');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//create 

const createPagos = async(req, res, next) => {

    try{
        const {monto, estado, idUsuario, idHistorialParqueo} = req.body;
        const data = {monto, estado, idUsuario, idHistorialParqueo};
        const newPagos = await models.Pagos.create(data);
        if(!newPagos){
            throw boom.badRequest('Pago no creado'); 
        }
        res.status(201).json(newPagos);
    } 
    catch(err){
        next(err);
    }
}

//delete

const deletePagos = async(req, res, next) => {
    try{
        const { idPago } = req.params;
        const rta = await models.Pagos.destroy({where: {idPago: idPago}});
        if(!rta){
            throw boom.notFound('Pago no encontrado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}

//update

const updatePagos = async(req, res, next) => {
    try{
        const { idPago } = req.params;
        const { monto, estado } = req.body;
        const data = {monto, estado};
        const updatedPagos = await models.Pagos.update(data, {
            where: {idPago: idPago}
        });
        if(!updatedPagos){
            throw boom.notFound('Pago no actualizado');
        }
        res.status(201).json({
            message: 'Pago actualizado',
        });
    }
    catch(err){
        next(err);
    }
}

export const methodsPagos = {
    getPagos,
    getPagosbyId,
    createPagos,
    deletePagos,
    updatePagos
}
