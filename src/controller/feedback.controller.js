import boom from '@hapi/boom';
import { models } from '../../libs/sequelize.js';

//read all
const getFeedbacks = async(req, res, next) => {
    try{
        const rta = await models.Feedback.findAll({
            include: ['Usuario']
        });
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
        const { idFeedback } = req.params;
        const rta = await models.Feedback.findByPk(idFeedback, {
            include: ['Usuario']
        });
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
        const { comentario, idUsuario } = req.body;
        const data = {comentario, idUsuario};
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
        const { idFeedback } = req.params;
        const rta = await models.Feedback.destroy({
            where: {idFeedback: idFeedback}
        });
        if(!rta){
            throw boom.notFound('Feedback no encontrado');
        }
        res.sendStatus(204);
    }
    catch(err){
        next(err);
    }
}

export const methodsFeedback = {
    getFeedbacks, 
    getFeedbackById, 
    createFeedback, 
    deleteFeedback
}