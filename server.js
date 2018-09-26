const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes')
const config = require('./config').get();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

const app = express();

app.use(bodyParser.json());
routes.set(app);

app.listen(port, () => {
    console.log(`Ouvindo na porta http://locahost:${port}`);
    console.log(`Ambiente: ${environment}`);
});
