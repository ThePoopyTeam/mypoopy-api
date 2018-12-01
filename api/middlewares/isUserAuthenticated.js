const admin = require('firebase-admin');

module.exports = function(req, res, next) {
    if (req.headers.uid) {
        const uid = req.headers.uid;
        admin.auth().getUser(uid)
            .then(function(userRecord) {
                if(!userRecord.disabled) {
                    next();
                } else {
                    res.status(401);
                    res.send('UID desativado.');
                }
            })
            .catch(function(error) {
                res.status(401);
                res.send({ error, message: 'UID inválida.'});
            });
    } else {
        res.status(401);
        res.send('UID não definida.');
    }
};
