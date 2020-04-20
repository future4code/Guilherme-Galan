const arrayNumeros : number[] = [1, 2, 3 , 4 , 5];

function handleArray(array: number[]):object{
    let soma = 0;
    for(let i of array){
        soma += i;
    }
    let quantidadeImpar = 0;
    array.map(numero =>{
        if(numero % 2 !== 0){
            quantidadeImpar += 1;
        }
    })
    return{
        "Soma": soma,
        "Numeros Impares": quantidadeImpar,
        "Quantidade": array.length,

    }
}

console.log(handleArray(arrayNumeros))