//Exercícios de Interpretação

/*Exercício 1

A função está recebendo um valor por parâmetro, que seria um valor em dólar. A função pede pro usuário informar o valor da cotação do Dólar e retorna
o valor em reais. Abaixo da função é criada uma variável "meuDinheiro" e invocamos a função nessa variável passando um parâmetro "100". Supondo que a cotação do Dólar
esteja em R$ 4.00, a função vai receber o valor 100(dólares) por parâmetro e calcular o valor em reais escrevendo no console "R$ 400.00".

*/

/*Exercício 2 

A função recebe 2 parâmetros(tipoDeInvestimento e valor), após receber esses 2 parâmetros é verificado através de um switch/case qual é o tipo de investimento e quanto ira render
com o valor recebido. Criando duas váriaveis e invocando a função, com os parâmetros da primeira váriavel ("Ações", 150) e da segunda váriavel ("Tesouro", 150) o resultado no console 
seria (165) e "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" respectivamente.

*/

/*Exercício 3 

Temos 3 arrays declarados numeros[], array1[] e array2[], o for está percorrendo o array numeros[] e verificando quais números são pares e quais são ímpares, os números pares são adicionados
através do método "push" no array1[] e os ímpares no array2[].
No console teríamos o seguinte resultado:
Quantidade total de números 14
6
8

*/

/*Exercício 4

Temo um array de números e 2 variáveis a primeira declarada como Infinity(Pesquisei apenas o valor de Infity, para saber que são números positivos) e a segundo como 0. O loop for está 
percorrendo o array de números, dentro do for temos 2 if, um verifica se numero do array é menor que a variável declarada como Infitnity e se for menor a variável vai receber esse valor.
O segundo if verifica se o numero do array é maior que a segunda variável declarada inicialmente como 0, se for maior o valor da variável recebe o valor do número.

No console teríamos o seguinte resultado:

-10
1590

*/

//Exercícios de Lógica de Programação

//Exercício 1


console.log("---------------Exercicio Logica 1-------------------")
console.log("---------------For-------------------")
//Temos o  for

const lista = [12, 22, 32, 42, 52]

for (item of lista) {
    console.log(item)
}

console.log("---------------While-------------------")
//Temos o while


var numerosAleatorios = new Array(8, 7, 10, 9),
    count = 0;


while (count < numerosAleatorios.length) {

    console.log(numerosAleatorios[count]);
    count++
}

console.log("---------------ForEach-------------------")
//Temos o ForEach

const carros = [
    { modelo: "A3", marca: "" },
    { modelo: "A4", marca: "" }
]

carros.forEach((carro) => {
    carro.marca = "Audi"
})

console.log(carros)



/* Exercício 2 

a. False
b. False
c. True
d. True
e. True

*/

//Exercício 3
console.log("---------------Exercicio Logica 3-------------------")

const quantidadeDeNumerosPares = 5

for (let i = 0; i < quantidadeDeNumerosPares; i++) {
    console.log(i * 2)
}

//Exercício 4
console.log("---------------Exercicio Logica 4-------------------")


function classificaTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero"
    } else if (a === b || a === c && b != c) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}


console.log(classificaTriangulo(5, 5, 5))

//Exercício 5
console.log("---------------Exercicio Logica 5-------------------")

let numero1 = 10
let numero2 = 20

console.log("Primeiro número: " + numero1)
console.log("Segundo número: " + numero2)

if (numero1 > numero2) {
    console.log("O maior é: " + numero1)
} else {
    console.log("O maior é: " + numero2)
}

if (numero1 % numero2 === 0) {
    console.log(numero1 + " é divisível por " + numero2)
} else {
    console.log(numero1 + " não é divisível por " + numero2)
}

if (numero2 % numero1 === 0) {
    console.log(numero2 + " é divisível por " + numero1)
} else {
    console.log(numero2 + " não é divisível por " + numero1)
}

if (numero1 > numero2) {
    console.log("A diferença entre eles é: " + (numero1 - numero2))
} else {
    console.log("A diferença entre eles é: " + (numero2 - numero1))
}

//Exercício de Funções

//Exercício 1
console.log("---------------Exercicio Funções 1-------------------")

const array1 = [0, 1, 2, 3, 4]

function segundoMaiorEMenor(array) {
    var maior = 0;
    var menor = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i] - 1;

        } else{
            menor = array[i] + 1;

        }
    }

    console.log("O segundo maior número é: " + maior + " e o segundo menor número é: " + menor)

}

segundoMaiorEMenor(array1)

//Exercício 2    

const alerta = () => {
    return alert("Hello Furute4!!")
}

const invocaFuncao = alerta()