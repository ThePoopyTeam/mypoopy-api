const testRoute = require('./testRoute');
const userRoute = require('./userRoute');

function set(app) {
    app.use('/api', testRoute);
    app.use('/api/user', userRoute);
}

module.exports = { set };
