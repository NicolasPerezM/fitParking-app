import Router from 'express';
import { methodsReservas as reservasController } from '../controller/reserva.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { createReservaSchema, updateReservaSchema, getReservaSchema } from '../../schemas/reservas.schema.js';

const router = Router();

router.get('/', 
    reservasController.getReservas);

router.get('/:idReserva', 
    validatorHandler(getReservaSchema, 'params'), 
    reservasController.getReservaById);

router.post('/crearReserva',
    validatorHandler(createReservaSchema, 'body'),
    reservasController.createReserva);

router.delete('/delete/:idReserva', 
    reservasController.deleteReserva);

router.patch('/update/:idReserva',
    validatorHandler(getReservaSchema, 'params'),
    validatorHandler(updateReservaSchema, 'body'),
    reservasController.updateReserva);

export default router;



