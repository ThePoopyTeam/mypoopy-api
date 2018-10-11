const BathroomModel = require('../models/bathroomModel');


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
        const newBathroom = req.body;

        bathroom.nome = newBathroom.nome;
        bathroom.endereco = newBathroom.endereco;
        bathroom.caracte = newBathroom.caracte;
        bathroom.lat = newBathroom.lat;
        bathroom.lon = newBathroom.lon;
        bathroom.hAb = newBathroom.hAb;
        bathroom.hFe = newBathroom.hFe;

        bathroom.save((err) => {
            if (err) {
                next(err);
            } else {
                res.send({ status: 201 });
            }
        });
    }
};
