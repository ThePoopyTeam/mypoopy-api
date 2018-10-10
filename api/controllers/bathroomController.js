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
        bathroom.nome = 'Banheiro da Sala';
        bathroom.endereco = 'Rua X, nº 123';
        bathroom.caracte = [{
            nome: "unissex",
            icone: "https://img.freepik.com/icones-gratis/toalete_318-82574.jpg?size=338&ext=jpg"
        }];
        bathroom.lat = 123.321;
        bathroom.lon = 321.123;
        bathroom.hAb = (new Date).getTime();
        bathroom.hFe = (new Date).getTime();

        bathroom.save((err) => {
            if (err) {
                next(err);
            } else {
                res.send('Salvo!');
            }
        });
    }
};
