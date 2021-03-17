const express = require('express'); 
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const mysqlstore = require('express-mysql-session')(session);
const bodyparser = require('body-parser'); 

const {database} = require('./keys');


const app = express();
require('./lib/passport');

/// archivos compartidos
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
partialsDir:path.join(app.get('views'),'partials'),
extname: '.hbs',
helpres: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');
/// archivos compartidos


//midlewars
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended:false
}));
app.use(bodyparser.json());
app.use(session({
    secret:'FINTECH',
    resave:false,
    saveUninitialized:false,
    store: new mysqlstore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales 
app.use((req,res,next )=>{
    app.locals.menssage = req.flash('menssage');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});
//varible globales 

//public
app.use(express.static(path.join(__dirname ,'public')));
//public


//routers
app.use(require('./Rutas/index.routes'))
app.use(require('./Rutas/Registro.routes'))
app.use(require('./Rutas/user.routes'))
app.use('/perfil', require('./Rutas/perfil.router'));
app.use('/clientes', require('./Rutas/Clientes.routes'));
app.use('/ProductoEntrada', require('./Rutas/ProductosEntrada.routes'))
app.use('/proveedor', require('./Rutas/proveedor.router'))
app.use('/productos', require('./Rutas/Productos.routes'))

module.exports = app; 