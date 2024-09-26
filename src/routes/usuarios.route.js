import {Router} from 'express';
import {methods as usuariosController}  from '../controller/usuarios.controller.js';

const router = Router();

router.get('/', usuariosController.getUsers);
router.get('/:id', usuariosController.getUserById);
router.post('/crearUsuario', usuariosController.createUser);
router.delete('/delete/:id', usuariosController.deleteUser);
router.patch('/update/:id', usuariosController.updateUser);

export default router;