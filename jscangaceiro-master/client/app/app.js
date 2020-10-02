//create instance of the controller.
let controller = new NegociacaoController();

//assciate event of the submission on form the call of the méthod "adiciona".
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller)); //add also function bind().