const UserModel = require('../models/userModel');

module.exports = {
    // funções do controller de usuário
    
    findAll: (req, res, next) => {
        UserModel.find({}).exec((err, data) => {
            if (err) {
                next(err);
            }

            res.send(data);
        })
    },
    create: (req, res, next) => {
        const user = new UserModel();
        user.nome = "Fulano da Silva";
        user.email = "fulano.silva@gmail.com";
        user.imagem = "https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png";
        user.experiencia = 0;

        user.save(err => {
            if (err) {
                next("erro ao criar usuário")
            }
            else {
                res.send('SALVO!');
            }
        })
    }
};