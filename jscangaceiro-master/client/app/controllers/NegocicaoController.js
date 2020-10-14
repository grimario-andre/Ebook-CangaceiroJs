//Creating the class. Negociation Controller.
class NegociacaoController {
    //creat a constructor.
    constructor() {
        //create vbarible to revice method document.queryselector to cross function bind()
        let	$	=	document.querySelector.bind(document);
        this._inputData	=	$('#data');
        this._inputQuantidade	=		$('#quantidade');
        this._inputValor	=	$('#valor');
        this._negociacoes	=	new	Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes'); // add object of the class NegociçõesView().

        //refrash the view.
        this._negociacoesView.update();
    }

    //create method to add(event) for to cancel when to click in the bottom submit.

    adiciona(event)	{
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());	//	modificação!							
        this._limpaFormulario();
    }

    paraArray(){
        // return array null and to concact with itens of the class Neogiciacoes.
        return [].concat(this._negociacoes);
    }

    //create method to clear form.
    _limpaFormulario()	{
        this._inputData.value	=	'';
        this._inputQuantidade.value	=	1;
        this._inputValor.value	=	0.0;
        this._inputData.focus();
    }	

    //create method to recive form.
    _criaNegociacao()	{
        //	retorna	uma	instância	de	negociação
        return new	Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );								
    }
};