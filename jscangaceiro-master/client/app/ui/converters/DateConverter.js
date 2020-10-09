class DateConverter {
    // this class can't call.
    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static paraTexto(data) {
        return `${Data.getDate()}
        /${Data.getMonth() + 1}
        /${Data.getFullYear()}`;
    }

    static paraData(texto) {
        console.log('use regular expression');
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }

        return new Date(...texto.split('-').map((item, indice) =>
            item - indice % 2));
    }
}