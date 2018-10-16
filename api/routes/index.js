const corsMiddleware = require('../middlewares/cors');
const userRoute = require('./userRoute');
const bathroomRoute = require('./bathroomRoute');

function set(app) {
    app.use(corsMiddleware);
    app.use('/api/user', userRoute);
    app.use('/api/bathroom', bathroomRoute);
}

module.exports = { set };
