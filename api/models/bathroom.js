
module.exports = class Bathroom {
    
    constructor(bath, next) {
        this.next = next;
        if (this._validateNome(bath.nome)) this.nome = bath.nome;
        if (this._validateEndereco(bath.endereco)) this.endereco = bath.endereco;
        if (this._validateCaracte(bath.caracte)) this.caracte = bath.caracte;
        if (this._validateLatLon(bath.lat)) this.lat = bath.lat;
        if (this._validateLatLon(bath.lon)) this.lon = bath.lon;
        if (this._validateTime(bath.hAb)) this.hAb = bath.hAb;
        if (this._validateTime(bath.hFe)) this.hFe = bath.hFe;
    }



    _validateNome(name) {
        if (!this._validateString('Nome', name)) return false;
        if (name.length > 50) this._responseValidation('Campo Nome atingiu o limite de carecteres.');
        return true;
    }

    _validateEndereco(endereco) {
        if (!this._validateString('Endereço', endereco)) return false;
        if (endereco.length > 150) this._responseValidation('Campo Endereço atingiu o limite de caracteres');
        return true;
    }

    _validateCaracte(caracteristicas) {
        if (!caracteristicas) this._responseValidation('Campo Caracteristica inválido.');
        if (caracteristicas.length < 1) this._responseValidation('Campo Caracteristica inválido.')
        caracteristicas.forEach(caracteristica => {
            if (!this._validateString('Caracteristica.NOME', caracteristica.nome)) return false;
            if (!this._validateString('Caracteristica.ICONE', caracteristica.icone)) return false;
        });
        return true;
    }

    _validateLatLon(latlon) {
        if (!latlon) this._responseValidation('Campo latitude ou longitude inválido.');
        // isNaN considera "123" como number
        if (typeof latlon !== 'number' || isNaN(latlon)) this._responseValidation('Campo latitude ou longitude inválido.');
        return true;
    }

    _validateTime(time) {
        const regex = new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
        if (!time) this._responseValidation('Campo Hora de Abertura ou Fechamento inválido.');
        if (!regex.test(time)) this._responseValidation('Campo Hora de Abertura ou Fechamento inválido.');
        return true;
    }


    _validateString(name, obj) {
        if (!obj) this._responseValidation(`Campo ${name} inválido.`);
        if (obj.langth === 0) this._responseValidation(`Campo ${name} inválido.`);
        if (obj.trim().length === 0) this._responseValidation(`Campo ${name} inválido.`);
        return true;
    }

    _responseValidation(error) {
        this.next.status(500);
        this.next.send(error);
    }
};