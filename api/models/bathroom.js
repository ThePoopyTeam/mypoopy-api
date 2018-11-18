
module.exports = class Bathroom {
    
    constructor(bath) {
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
        if (name.length > 50) throw new Error('Campo Nome atingiu o limite de carecteres.');
        return true;
    }

    _validateEndereco(endereco) {
        if (!this._validateString('Endereço', endereco)) return false;
        if (endereco.length > 150) throw new Error('Campo Endereço atingiu o limite de caracteres');
        return true;
    }

    _validateCaracte(caracteristicas) {
        if (!caracteristicas) throw new Error('Campo Caracteristica inválido.');
        if (caracteristicas.length < 1) throw new Error('Campo Caracteristica inválido.')
        caracteristicas.forEach(caracteristica => {
            if (!this._validateString('Caracteristica.NOME', caracteristica.nome)) return false;
            if (!this._validateString('Caracteristica.ICONE', caracteristica.icone)) return false;
        });
        return true;
    }

    _validateLatLon(latlon) {
        if (!latlon) throw new Error('Campo latitude ou longitude inválido.');
        // isNaN considera "123" como number
        if (typeof latlon !== 'number' || isNaN(latlon)) throw new Error('Campo latitude ou longitude inválido.');
        return true;
    }

    _validateTime(time) {
        const regex = new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
        if (!time) throw new Error('Campo Hora de Abertura ou Fechamento inválido.');
        if (!regex.test(time)) throw new Error('Campo Hora de Abertura ou Fechamento inválido.');
        return true;
    }


    _validateString(name, obj) {
        if (!obj) throw Error(`Campo ${name} inválido.`);
        if (obj.langth === 0) throw new Error(`Campo ${name} inválido.`);
        if (obj.trim().length === 0) throw new Error(`Campo ${name} inválido.`);
        return true;
    }
};