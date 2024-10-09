import Router from 'express';
import { methodsPagos as pagosController } from '../controller/pagos.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { createPagoSchema, updatePagoSchema, getPagoSchema } from '../../schemas/pagos.schema.js';

const router = Router();

router.get('/', 
    pagosController.getPagos);

router.get('/:idPago', 
    validatorHandler(getPagoSchema, 'params'), 
    pagosController.getPagosbyId);

router.post('/crearPagos', 
    validatorHandler(createPagoSchema, 'body'), 
    pagosController.createPagos);

router.delete('/delete/:idPago', 
    pagosController.deletePagos);

router.patch('/update/:idPago', 
    validatorHandler(getPagoSchema, 'params'),
    validatorHandler(updatePagoSchema, 'body'),
    pagosController.updatePagos);

export default router;