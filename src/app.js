import express from 'express';
import morgan from 'morgan';
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';
import usuariosRoutes from './routes/usuarios.route.js';
import { logErrors, errorHandler } from '../middlewares/error.handler.js';

//Inicializaciones
const app =  express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//ajustes
app.set('port', process.env.PORT || 3000);

//rutas
app.get('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/usuarios', usuariosRoutes);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logErrors);
app.use(errorHandler);

//documentos publicos
app.use(express.static(join(__dirname, 'public')));

//exportar
export default app;