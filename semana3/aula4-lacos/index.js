//Exercícios de interpretação

/*Exercício 1

O código está somando os números 0 até 14 (i < 15), o resultado da soma é 105


*/

/*Exercício 2

a. O comando push adiciona um item para o array, no caso novaLista[].

b. O console mostraria os números que são divisíveis por 5 : [10, 15, 25, 30]

c. const numero = 3 -- resultado no console : [12, 15, 18, 21, 27, 30]

   const numero = 4 -- resultado no console : [12]

*/


//Exercícios de escrita

// Exercício 3

// a.

const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90,103, 110, 55]

let maior = numeros[0]
let menor = numeros[1]

for(let i = 0; i < numeros.length; i++){
    const elemento = numeros[i]

    if(elemento > maior){
        maior = elemento
    }else if(elemento < menor){
        menor = elemento
    }
}

console.log("O maior número é:", maior, " e o menor número é:", menor)

// b.

const numerosB = [80, 30, 130, 40, 60, 21, 70, 120, 90,103, 110, 55]
const numerosDividos = []

for(let i = 0; i < numerosB.length; i++){

    let divisao = numerosB[i] / 10

    numerosDividos.push(divisao);
}

console.log(numerosDividos)

//c.

const numerosC = [80, 30, 130, 40, 60, 21, 70, 120, 90,103, 110, 55]
const numerosPares = []

for(numero of numerosC){
    if(numero % 2 ===0){
        numerosPares.push(numero)
    }
}

console.log(numerosPares)

// d.

const numerosD = [80, 30, 130, 40, 60, 21, 70, 120, 90,103, 110, 55]
const indexArray = []

for(let i = 0; i < numerosD.length; i++){
    let index = numerosD.indexOf(numerosD[i], 0)
    let numero = numerosD[i]  

    indexArray.push("O elemento do índex " + index +  " é: " + numero)    
}

console.log(indexArray)

// ***** Desafios *****

/*Desafio 1

Como o console.log está dentro do "for" o resultado seria o seguinte:

0
00
000
0000

Pois ele iria mostrar a "linha" que tem o valor de zero a cada loop no "for", incrementando 1.

*/

//Desafio 2

const numeroJogador1 = Number(prompt("Digite um número:"))
console.log("Vamos jogar!")

let numeroJogador2 = Number(prompt("Chute um número:"))
console.log("O número chutado foi: " + numeroJogador2)

for(let i = 0; i < numeroJogador1; i++){
if(numeroJogador2 > numeroJogador1){
    console.log("Eeeerrrou, é menor ")
    Number(prompt("Chute um número:"))    
}else if(numeroJogador2 < numeroJogador1){
    console.log("Errrrrou, é maior")
    Number(prompt("Chute um número:"))    
}else if(numeroJogador2 === numeroJogador1){
    console.log("Parabéns você acertou o número.")
    console.log("Você tentou: " + i + ("vezes"))
}
}



