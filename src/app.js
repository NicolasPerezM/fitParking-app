import express from 'express';
import morgan from 'morgan';
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';
import usuariosRoutes from './routes/usuarios.route.js';
import { logErrors, errorHandler } from '../middlewares/error.handler.js';
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

//rutas
//app.get('/api/v1/usuarios', usuariosRoutes);
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/v1/crearUsuario', (req, res) => {
    res.render('crearUsuario', { layout: './layouts/sidebar' });
});

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