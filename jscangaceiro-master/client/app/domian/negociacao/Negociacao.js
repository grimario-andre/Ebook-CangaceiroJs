class Negociacao {
    constructor (data,quantidade,valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // congelar objeto/atributo.
    }

    //criar método obtem volume. 

    getVolume(){
        return this.getQuantidade() * this.getValor();
    }

    //getters and setters 
    
    // data
    getData(){
        return new Date(this._data.getTime());
    }

    //quantidade
    getQuantidade(){
        return this._quantidade;
    }

    setQuantidade(qt){
        this._quantidade = qt;
        return this._quantidade;
    }

    // valor
    getValor (){
        return this._valor;
    };
    
    setValor (vl){
        this._valor = vl;
        return this._valor;
    };
}