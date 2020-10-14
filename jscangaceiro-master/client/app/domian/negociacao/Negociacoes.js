class Negociacoes {
    constructor (){
        this._negociacoes = [];
    };

    // create method adiciona
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    };

    // create method to when called return array to class.
    paraArray(){
        return this._negociacoes;
    };
};

