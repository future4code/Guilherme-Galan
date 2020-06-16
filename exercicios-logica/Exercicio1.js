/* A - Faça uma função que receba um array de números e devolva um objeto que contenha as informações:
soma de todos os itens, quantidade de itens e multiplicação de todos os itens */
var arrayNumbers = [1, 5, 6, 8, 10, 12];
function infosArray(array) {
    var sum = array.reduce(function (total, numero) { return total + numero; });
    var multiplication = 1;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var number = array_1[_i];
        multiplication *= number;
    }
    return {
        'Soma dos números': sum,
        'Quantidade de números': arrayNumbers.length,
        'Multiplicação dos números': multiplication
    };
}
console.log(infosArray(arrayNumbers));
/* B - Faça uma função que receba um array de números e devolve um objeto que contenha as informações: maior número e menor número  */
function biggerAndSmaller(array) {
    return {
        'Maior Valor': Math.max.apply(Math, array),
        'Menor Valor': Math.min.apply(Math, array)
    };
}
console.log(biggerAndSmaller(arrayNumbers));
