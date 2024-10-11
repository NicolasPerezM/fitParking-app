import express from 'express';
import morgan from 'morgan';
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';
import usuariosRoutes from './routes/usuarios.route.js';
import vehiculosRoutes from './routes/vehiculos.route.js';
import reservasRoutes from './routes/reserva.route.js';
import pagosRoutes from './routes/pagos.route.js';
import notificacionRoutes from './routes/notificacion.route.js';
import loteRoutes from './routes/lote.route.js';
import inidenciaRoutes from './routes/incidencias.route.js';
import { logErrors, errorHandler, boomErrorHandler } from '../middlewares/error.handler.js';
import expressLayouts from 'express-ejs-layouts';

//Inicializaciones
const app =  express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//ajustes
app.set('port', process.env.PORT || 3000);

//handlebars config
/*app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');*/
app.use(expressLayouts);
//definir el directorio
app.set('layout', 'layouts/layout');
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//rutas

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/v1/usuarios/crearUsuario', (req, res) => {
    res.render('crearUsuario', { layout: './layouts/sidebar' });
});

//app.get('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/vehiculos', vehiculosRoutes);
app.use('/api/v1/reservas', reservasRoutes);
app.use('/api/v1/pagos', pagosRoutes);
app.use('/api/v1/notificaciones', notificacionRoutes);
app.use('/api/v1/lotes', loteRoutes);
app.use('/api/v1/incidencias', inidenciaRoutes);
//middlewares-err

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//documentos publicos
app.use(express.static(join(__dirname, 'public')));
app.use('/css', express.static(join(__dirname, 'public/css')));

//exportar
export default app;