const restful = require("node-restful");
const mongoose = restful.mongoose;

const BathroomSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    nome: { type: String, trim: true, required: true, max: 50 },
    endereco: { type: String, trim: true, required: true, max: 150 },
    caracte: [{ nome: String, icone: String }],
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    hAb: { type: String, required: true },
    hFe: { type: String, required: true }
});



module.exports = restful.model('Bathroom', BathroomSchema);