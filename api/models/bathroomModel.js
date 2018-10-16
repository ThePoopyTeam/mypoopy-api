const restful = require("node-restful");
const mongoose = restful.mongoose;

const BathroomSchema = new mongoose.Schema({
    nome: { type: String, trim: true, required: true },
    endereco: { type: String, trim: true, required: true, max: 100 },
    caracte: [{ nome: String, icone: String }],
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    hAb: { type: String },
    hFe: { type: String }
});



module.exports = restful.model('Bathroom', BathroomSchema);