const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes')
const config = require('./config').get();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';


const app = express();

// Mongodb configuration
mongoose.connect(config.mongodb.url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


routes.set(app);

app.listen(port, () => {
    console.log(`Ouvindo na porta http://locahost:${port}`);
    console.log(`Ambiente: ${environment}`);
});

db.on('error', console.error.bind(console, 'connection: error'));

db.once('open', () => {
    console.log(`Conectado no banco de dados: ${environment}`);
});
