//Creating the class. Negociation Controller.
class NegociacaoController {
    //creat a constructor.
    constructor(){
       //create vbarible to revice method document.queryselector to cross function bind()
       let $ = document.querySelector.bind(document);

       this._inputData = $('#data');
       this._inputQuantidade = $('#quantidade');
       this._inputValor = $('#valor');
    }
    
    //create method to add(event) for to cancel when to click in the bottom submit.
    adiciona(event) {
        event.preventDefault();
    
        let negociacao = new Negociacao(
            this._inputData.value,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        window.console.log(negociacao);
    }
};