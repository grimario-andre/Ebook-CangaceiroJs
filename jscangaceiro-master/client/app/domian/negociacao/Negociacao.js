class Negociacao {

    // usar recurso propiedade de objeto lateral.
    constructor(_data, _quantidade, _valor) {

        //usar métedo Object.assing()
        Object.assign(this, { _quantidade, _valor });
        this._data = new Date(_data.getTime());

        Object.freeze(this); // congelar objeto/atributo.
    }

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {

        return new Date(this._data.getTime());
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }
}

