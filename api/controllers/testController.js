const { TestModel } = require('../services/testService');


module.exports = {
    teste: (req, res, next) => {
        // algumas logicas podem ser colocar aqui no controller

        // chamada do model com sua logica 
        const teste = new TestModel();

        // caso a regra do model retorne sucesso chama o then
        teste.testFunction().then(data => res.send({ data }), err => next(err));
    }
};