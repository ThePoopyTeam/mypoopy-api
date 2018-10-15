const TestModel = require("../models/testModel");


class TestService {
    
    constructor() {
        
    }
    
    getAll() {
        return new Promise((resolve, reject) => {
            TestModel.find({}, (err, data) => {
                if (err) {
                    reject(err);
                }
                
                resolve(data);
            }) 
        });
    }
}

module.exports = { TestService };