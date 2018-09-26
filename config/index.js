const production = require('./production');
const development = require('./development');

function get() {
    return process.env.NODE_ENV === 'production' ? production : development;
}

module.exports = { get };