import express from 'express';
import morgan from 'morgan';
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';
import usuariosRoutes from './routes/usuarios.route.js';

//Inicializaciones
const app =  express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//ajustes
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.get('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/usuarios', usuariosRoutes);

//documentos publicos
app.use(express.static(join(__dirname, 'public')));

//exportar
export default app;