/* A - Faça uma função que receba um array de números e devolva um objeto que contenha as informações: 
soma de todos os itens, quantidade de itens e multiplicação de todos os itens */

let arrayNumbers :number[] = [1, 5, 6, 8, 10, 12];

function infosArray(array: number[]): Object{
    const sum = array.reduce((total, numero) => total + numero);
    let multiplication = 1;
    for(const number of array){        
        multiplication *= number
    }        
    
    return{
        'Soma dos números': sum,
        'Quantidade de números': arrayNumbers.length,
        'Multiplicação dos números': multiplication
    }
}

console.log(infosArray(arrayNumbers));

/* B - Faça uma função que receba um array de números e devolve um objeto que contenha as informações: maior número e menor número  */

function biggerAndSmaller(array: number[]): Object{
    return{
        'Maior Valor': Math.max.apply(Math, array),
        'Menor Valor': Math.min.apply(Math, array)
    }
}

console.log(biggerAndSmaller(arrayNumbers));