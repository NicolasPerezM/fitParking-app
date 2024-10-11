import Router from 'express';
import { methodsFeedback as feedbackController } from '../controller/feedback.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { createFeedbackSchema, getFeedbackSchema } from '../../schemas/feedback.schema.js';

const router = Router();

router.get('/', 
    feedbackController.getFeedbacks);

router.get('/:idFeedback',
    validatorHandler(getFeedbackSchema, 'params'),
    feedbackController.getFeedbackById);

router.post('/crearFeedback',
    validatorHandler(createFeedbackSchema, 'body'),
    feedbackController.createFeedback);

router.delete('/delete/:idFeedback',
    feedbackController.deleteFeedback);

export default router;

