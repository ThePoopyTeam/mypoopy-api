const restful = require("node-restful");
const mongoose = restful.mongoose;



const testSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, min: 0,  required: false }
});


module.exports = restful.model('Test', testSchema);