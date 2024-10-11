import Router from 'express';
import { methodsHistorialParqueo as historialParqueoController } from '../controller/historialParqueo.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { createHistorialParqueoSchema, getHistorialParqueoSchema } from '../../schemas/historialParqueo.schema.js';

const router = Router();

router.get('/', 
    historialParqueoController.getHistorialParqueo);

router.get('/:idHistorialParqueo',
    validatorHandler(getHistorialParqueoSchema, 'params'),
    historialParqueoController.getHistorialParqueoById);

router.post('/crearHistorialParqueo',
    validatorHandler(createHistorialParqueoSchema, 'body'),
    historialParqueoController.createHistorialParqueo);

router.delete('/delete/:idHistorialParqueo',
    historialParqueoController.deleteHistorialParqueo);

export default router;