const restful = require("node-restful");
const mongoose = restful.mongoose;

const UserSchema = new mongoose.Schema({
    nome: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    imagem: { type: String, trim: true },
    experiencia: { type: Number, min: 0 }
});



module.exports = restful.model('User', UserSchema);