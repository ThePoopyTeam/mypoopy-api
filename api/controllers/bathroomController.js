const BathroomModel = require('../models/bathroomModel');
const ReportModel = require('../models/reportModel');

const Bathroom = require('../models/bathroom');
const Report = require('../models/report');


module.exports = {
    findAll: (req, res, next) => {
        BathroomModel.find({}).exec((err, data) => {
            if (err) {
                next(err);
            }
            res.send(data);
        });
    },
    create: (req, res, next) => {
        const bathroom = new BathroomModel();
        const bath = new Bathroom(req.body, res);
        const uid = req.headers.uid;

        bathroom.uid = uid;
        bathroom.nome = bath.nome;
        bathroom.endereco = bath.endereco;
        bathroom.caracte = bath.caracte;
        bathroom.lat = bath.lat;
        bathroom.lon = bath.lon;
        bathroom.hAb = bath.hAb;
        bathroom.hFe = bath.hFe;

        bathroom.save((err) => {
            if (err) {
                next(err);
            } else {
                res.status(201);
                res.send(bathroom);
            }
        });
    },
    createReport: (req, res, next) => {
        const report = new ReportModel();
        const reporValid = new Report(req.body, res);

        report.uid = req.headers.uid;
        report.banheiro = reporValid.banheiro;
        report.pesquisa = reporValid.pesquisa;
        report.descricao = reporValid.descricao;

        report.save((err) => {
            if (err) {
                next(err);
            } else {
                res.status(201);
                res.send(report);
            }
        });
    },
    findOneReport: (req, res, next) => {
        if (!req.params.id) {
            res.status(500);
            res.send('Id do banheiro não informado');
        }

        const banheiroId = req.params.id;
        ReportModel.findOne({ banheiro: banheiroId }, (err, data) => {
            if (err) {
                res.status(500);
                res.send('Erro ao buscar dados do report');
            }
            res.send(data);
        });
    }
};
