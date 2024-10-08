import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all
const getFeedback = async(req, res, next) => {
    try{
        const rta = await models.Feedback.findAll();
        if(rta.length === 0){
            throw boom.notFound('No hay feedback.');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//read by id

const getFeedbackById = async(req, res, next) =>{
    try{
        const { id } = req.params;
        const rta = await models.Feedback.findOne({where: {id: id}});
        if(!rta){
            throw boom.notFound('Feedback no encontrado');
        }
        res.status(201).json(rta);
    }
    catch(err){
        next(err);
    }
}

//create 

const createFeedback = async(req, res, next) =>{
    try{
        const { comentario } = req.body;
        const data = {comentario};
        const newFeedback = await models.Feedback.create(data);
        if(!newFeedback){
            throw boom.badRequest('Feedback no creado');
        }
        res.status(201).json(newFeedback);
    }
    catch(err){
        next(err);
    }
}

//delete

const deleteFeedback = async(req, res, next) =>{
    try{
        const { id } = req.params;
        const rta = await models.Feedback.destroy({where: {id: id}});
        if(!rta){
            throw boom.notFound('Feedback no encontrado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}

export {getFeedback, getFeedbackById, createFeedback, deleteFeedback}