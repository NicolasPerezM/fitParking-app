import Router from 'express';
import { methodsIncidencias as incidenciasController } from '../controller/incidencias.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';  
import { createIncidenciaSchema, getIncidenciaSchema } from '../../schemas/incidencias.schema.js';

const router = Router();

router.get('/', 
    incidenciasController.getIncidencias);

router.get('/:idIncidencia',
    validatorHandler(getIncidenciaSchema, 'params'),
    incidenciasController.getIncidencia);

router.post('/crearIncidencia',
    validatorHandler(createIncidenciaSchema, 'body'),
    incidenciasController.createIncidencia);

router.delete('/delete/:idIncidencia',
    incidenciasController.deleteIncidencia);

/*router.patch('/update/:idIncidencia',
    validatorHandler(getIncidenciaSchema, 'params'),
    validatorHandler(updateIncidenciaSchema, 'body'),
    incidenciasController.updateIncidencia);*/

export default router;