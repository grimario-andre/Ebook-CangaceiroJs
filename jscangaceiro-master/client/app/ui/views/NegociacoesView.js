class NegociacoesView{
    //create constructor.
    constructor(seletor){
        let	$ =	document.querySelector.bind(document);
        this._elemento = $(seletor);
    };

    //method update to view table.
    update(){
        this._elemento.innerHTML = this.template(); 
    }

    //create method
    template(){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>

                <tfoot>
                </tfoot>
            </table> 
                    `;
    }
};