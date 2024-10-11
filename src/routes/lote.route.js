import Router from 'express';
import { methodsLote as loteController } from '../controller/lote.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import { getLoteSchema, createLoteSchema, updateLoteSchema } from '../../schemas/lote.schema.js';


const router = Router();

router.get('/',
    loteController.getLotes);

router.get('/:idLote',
    validatorHandler(getLoteSchema, 'params'),
    loteController.getLote);

router.post('/crearLote',
    validatorHandler(createLoteSchema, 'body'),
    loteController.createLote);

router.delete('/delete/:idLote',
    loteController.deleteLote);

router.patch('/update/:idLote',
    validatorHandler(getLoteSchema, 'params'),
    validatorHandler(updateLoteSchema, 'body'),
    loteController.updateLote);

export default router;