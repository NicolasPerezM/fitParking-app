import Router from 'express';
import { methodsEspacioParqueo as espacioParqueoController } from '../controller/espacioParqueo.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { getEspacioParqueoSchema, createEspacioParqueoSchema, updateEspacioParqueoSchema } from '../../schemas/espacioParqueo.schema.js';

const router = Router();

router.get('/',
    espacioParqueoController.getEspaciosParqueo);

router.get('/:idEspacioParqueo',
    validatorHandler(getEspacioParqueoSchema, 'params'),
    espacioParqueoController.getEspacioParqueoById);

router.post('/crearEspacioParqueo',
    validatorHandler(createEspacioParqueoSchema, 'body'),
    espacioParqueoController.createEspacioParqueo);

router.delete('/delete/:idEspacioParqueo',
    espacioParqueoController.deleteEspacioParqueo);

router.patch('/update/:idEspacioParqueo',
    validatorHandler(getEspacioParqueoSchema, 'params'),
    validatorHandler(updateEspacioParqueoSchema, 'body'),
    espacioParqueoController.updateEspacioParqueo);

export default router;