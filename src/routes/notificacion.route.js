import Router from 'express';
import { methodsNotificacion as notificacionController } from '../controller/notificacion.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { createNotificacionSchema, getNotificacionSchema } from '../../schemas/notificacion.schema.js';

const router = Router();

router.get('/', 
    notificacionController.getNotificaciones);

router.get('/:idNotificacion',
    validatorHandler(getNotificacionSchema, 'params'),
    notificacionController.getNotificationById);

router.post('/crearNotificacion',
    validatorHandler(createNotificacionSchema, 'body'),
    notificacionController.createNotificacion);

router.delete('/delete/:idNotificacion',
    notificacionController.deleteNotificacion);

export default router;
