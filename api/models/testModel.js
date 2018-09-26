

class TestModel {


    constructor() {
        // alguma logica
    }

    testFunction() {
        // ideal retornar uma promise
        return new Promise((resolve, reserve) => {
            resolve('Tudo funcionando como esperado!');
        });
    }

}


module.exports = { TestModel };