// Imports
const cors = require('cors');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
require('ejs');



const app = express();
const port = process.env.PORT || 5000

// Middlewares
// TODO: Implementar middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(45635, () => console.log('Server on port xxxx'));