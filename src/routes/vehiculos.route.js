import { Router } from 'express';
import { methodsVehicles as vehiculosController } from '../controller/vehiculos.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { createVehicleSchema, updateVehicleSchema, getVehicleSchema } from '../../schemas/vehiculos.schema.js';

const router = Router();

router.get('/', 
    vehiculosController.getVehicles);

router.get('/:id', 
    validatorHandler(getVehicleSchema, 'params'), 
    vehiculosController.getVehicleById);

router.post('/crearVehiculo',
    validatorHandler(createVehicleSchema, 'body'),
    vehiculosController.createVehicle);

router.delete('/:id',
    vehiculosController.deleteVehicle);

router.patch('/:id', 
    validatorHandler(getVehicleSchema, 'params'),
    validatorHandler(updateVehicleSchema, 'body'),
    vehiculosController.updateVehicle);

export default router;