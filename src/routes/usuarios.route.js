import {Router} from 'express';
import {methods as usuariosController}  from '../controller/usuarios.controller.js';
import validatorHandler from '../../middlewares/validator.handler.js';
import {createUserSchema, updateUserSchema, getUserSchema} from '../../schemas/usuarios.schema.js';

const router = Router();

router.get('/', 
    usuariosController.getUsers);

router.get('/:idUsuario', 
    validatorHandler(getUserSchema, 'params'), 
    usuariosController.getUserById);

router.post('/crearUsuario', 
    validatorHandler(createUserSchema, 'body'), 
    usuariosController.createUser);

router.delete('/delete/:idUsuario', 
    usuariosController.deleteUser);
    
router.patch('/update/:idUsuario', 
    validatorHandler(getUserSchema, 'params'), 
    validatorHandler(updateUserSchema, 'body'), 
    usuariosController.updateUser);

export default router;