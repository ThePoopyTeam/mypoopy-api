const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes')
const config = require('./config').get();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

// firebase configurations
const admin = require('firebase-admin');
const serviceAccount = require('./config/mypoopyproject-198f6-firebase-adminsdk-66njv-40a63e4c91.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mypoopyproject-198f6.firebaseio.com"
});



// Mongodb configurations
mongoose.connect(config.mongodb.url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;



const app = express();

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
