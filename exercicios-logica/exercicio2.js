/* a. Faça uma função que receba uma string e devolva um objeto com as informações:
quantos caracteres a string possui, qual seu primeiro caracter e qual seu último caracter */
function infosString(string) {
    return {
        'Characters': string.length,
        'First Character': string[0],
        'Last Character': string[string.length - 1]
    };
}
console.log(infosString('Guilherme'));
/* b. Faça uma função que receba uma string e devolva um array com seus caracteres. Se o input for escola,
a saída deve ser [e, s, c, o, l, a]  */
function convertStringToArray(string) {
    var arrayCharacters = [];
    for (var i = 0; i < string.length; i++) {
        arrayCharacters.push(string[i]);
    }
    return arrayCharacters;
}
console.log(convertStringToArray('escola'));
