const BathroomModel = require('../models/bathroomModel');
const Bathroom = require('../models/bathroom');


module.exports = {
    findAll: (req, res, next) => {
        BathroomModel.find({}).exec((err, data) => {
            if (err) {
                next(err);
            }
            res.send(data);
        });
    },
    create: (req, res, next) => {
        const bathroom = new BathroomModel();
        const bath = new Bathroom(req.body);
        const uid = req.headers.uid;

        bathroom.uid = uid;
        bathroom.nome = bath.nome;
        bathroom.endereco = bath.endereco;
        bathroom.caracte = bath.caracte;
        bathroom.lat = bath.lat;
        bathroom.lon = bath.lon;
        bathroom.hAb = bath.hAb;
        bathroom.hFe = bath.hFe;

        bathroom.save((err) => {
            if (err) {
                next(err);
            } else {
                res.send(bathroom);
            }
        });
    }
};
