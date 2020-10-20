class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    //abstract class.   
    template(model) {
        throw new Error('Você	precisa	implementar	o	método	template');
    }

}