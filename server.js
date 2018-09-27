const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes')
const config = require('./config').get();
const mongoose = require('mongoose');
mongoose.connect(config.mongodb.url);
const port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
const environment = process.env.NODE_ENV || 'development';

const app = express();
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
routes.set(app);

app.listen(port, () => {
    console.log(`Ouvindo na porta http://locahost:${port}`);
    console.log(`Ambiente: ${environment}`);
});

db.on('error', console.error.bind(console, 'connection: error'));
db.once('open', function() {
    console.log(`Conectado no banco de dados: ${environment}`);
});
