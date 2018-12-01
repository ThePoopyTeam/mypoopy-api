const restful = require("node-restful");
const mongoose = restful.mongoose;

const ReportSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    banheiro:  { type: String, required: true},
    pesquisa:  { type: Number, required: true},
    descricao: { type: String, required: false }
});

module.exports = restful.model('Report', ReportSchema);