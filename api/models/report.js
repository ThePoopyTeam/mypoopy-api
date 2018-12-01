
module.exports = class Report {

    constructor(report, next) {
        this.next = next;
        if (this._validateString('Banheiro Id', report.banheiro)) this.banheiro = report.banheiro;
        if (this._validateNumberPesquisa(report.pesquisa))this.pesquisa = report.pesquisa;
        this.descricao = report.descricao;
    }


    _validateString(name, obj) {
        if (!obj) this._responseValidation(`Campo ${name} inválido.`);
        if (obj.langth === 0) this._responseValidation(`Campo ${name} inválido.`);
        if (obj.trim().length === 0) this._responseValidation(`Campo ${name} inválido.`);
        return true;
    }

    _validateNumberPesquisa(pesquisa) {
        console.log('pesquisa ==> ', pesquisa);
        if (pesquisa < 0) this._responseValidation('Campo pesquisa inválido.');
        // isNaN considera "123" como number
        if (typeof pesquisa !== 'number' || isNaN(pesquisa)) this._responseValidation('Campo pesquisa inválido.');
        return true;
    }

    _responseValidation(error) {
        this.next.status(500);
        this.next.send(error);
    }
}