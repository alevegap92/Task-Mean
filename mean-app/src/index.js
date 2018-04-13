const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

//Routers rutas
//const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// middlewares: antes que se carge en el navegador y el cliente
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//route
//app.use(indexRoutes);
app.use('/api',tasksRoutes);

//static files
app.use(express.static(path.join(__dirname, 'dist')))

//start server
app.listen(app.get('port'), ()=> {
	console.log('server on port', app.get('port'));
});
console.log('Funciona');