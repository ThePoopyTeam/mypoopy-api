const UserModel = require('../models/userModel');

module.exports = {
    // funções do controller de usuário
    
    find: (req, res, next) => {
        UserModel.find({}).exec((err, data) => {
            if (err) {
                next(err);
            }

            res.send(data);
        });
    },
    create: (req, res, next) => {
        const user = new UserModel();
        const newUser = req.body;
        user.nome = newUser.nome;
        user.email = newUser.email;
        user.imagem = newUser.imagem;
        user.experiencia = 0;

        user.save(err => {
            if (err) {
                next(err)
            }
            else {
                res.send({});
            }
        })
    }
};
