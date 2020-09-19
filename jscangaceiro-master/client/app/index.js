var campos = [
    window.document.querySelector('#data'),
    window.document.querySelector('#valor'),
    window.document.querySelector('#quantidade')
];

console.log(campos); //verificando o conteúdo do array.

//precisamos de tbody, pois ele receberá a tr que vamos contruir.

var tbody = window.document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    console.log('cancelando a submissão do formulário');
    event.preventDefault();

    console.log('substituir o alert')//substituir o aler por um novo código.
    var tr = window.document.createElement('tr');

    campos.forEach(function (campo) {
        console.log('criar td vazia')//criar td vazia.
        var td = document.createElement('td');

        console.log('atribuir valor ao campo td'); //atribuir valor ao campo td
        td.textContent = campo.value;

        console.log('adicionar td na tr'); //add elemento filho ao pai.
        tr.appendChild(td);
    });

    console.log('td vai armazenar o volume da negociação');
    var tdVolume = window.document.createElement('td');

    tdVolume.textContent = campos[1].value * campos[2].value;

    console.log('adicionar td ref ao volume a tr');
    tr.appendChild(tdVolume);

    console.log('adicionar a tr ao tbody');
    tbody.appendChild(tr);

    //	limpa	o	campo	da	data
    campos[0].value = '';
    //	limpa	o	campo	da	quantidade
    campos[1].value = 1;
    //	limpa	o	campo	do	valor
    campos[2].value = 0;
    //	foca	no	campo	da	data
    campos[0].focus();
});