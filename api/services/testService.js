const TestModel = require("../models/testModel");


class TestService {
    
    constructor() {
        
    }
    
    getTestModel() {
        return new Promise((resolve, reject) => {
            TestModel.findAll({}, (err, data) => {
                if (err) {
                    reject(err);
                }
                
                resolve(data);
            }) 
        });
    }
}