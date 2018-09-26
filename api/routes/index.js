const testRoute = require('./testRoute');

function set(app) {
    app.use('/', testRoute);
}

module.exports = { set };
