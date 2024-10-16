import { Router } from 'express';
import { methodsVehicles as vehiculosController } from '../controller/vehiculos.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { createVehicleSchema, updateVehicleSchema, getVehicleSchema } from '../../schemas/vehiculos.schema.js';

const router = Router();

router.get('/', 
    vehiculosController.getVehicles);

router.get('/:idVehiculo', 
    validatorHandler(getVehicleSchema, 'params'), 
    vehiculosController.getVehicleById);

router.post('/crearVehiculo',
    validatorHandler(createVehicleSchema, 'body'),
    vehiculosController.createVehicle);

router.delete('/:idVehiculo',
    vehiculosController.deleteVehicle);

router.patch('/:idVehiculo', 
    validatorHandler(getVehicleSchema, 'params'),
    validatorHandler(updateVehicleSchema, 'body'),
    vehiculosController.updateVehicle);

export default router;