class Mensagem {
    constructor(texto = '') {
        //passar uma string em branco para eveitar erro undefined
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}