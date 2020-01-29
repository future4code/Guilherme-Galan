/* Exercício de Interpretação 1

a. False
b. True
c. True
d. False
e. boolean

*/

/* Exercício de Interpretação 2 

a.Array é um conjunto de informações que podem ser de qualquer tipo(String,Number,Boolean..) e é declarada let array[].
b.O index inicial de uma array é 0.
c.Podemos verificar o tamanho da array com o comando array.length.
d. 
    I. Undefined
    II. null
    III. 11
    IV. 3 e 4
    V. 19 e 9
    VI. 3
    VII. 1

*/

//Exercício de escrita de código 1

//a.

const fahrenheit = 77
let kelvin = 0 

console.log(kelvin = (fahrenheit -32) * 5/9 + 273.15, "K")

//b.

const celsius = 80
let fahrenheit = 0

console.log(fahrenheit = celsius * 9/5 + 32, "F")

//c.

const celsius = 30
let fahrenheit = 0
let kelvin = 0

console.log(fahrenheit = celsius *9/5 + 32, "F")
console.log(kelvin = celsius + 273.15 , "K")

//d.

let celsius = Number(prompt("Digite o valor em Celsius:"))
let fahrenheit = 0
let kelvin = 0

console.log(fahrenheit = celsius *9/5 + 32, "F")
console.log(kelvin = celsius + 273.15 , "K")

//Exercício de escrita de código 2

let resposta = prompt("Qual o seu endereço?")
console.log("1. Qual o seu endereço?" , "Resposta: ", resposta )

let resposta2 = prompt("Qual a sua música favorita?")
console.log("2. Qual a sua música favorita?" , "Resposta: ", resposta2 )

let resposta3 = prompt("Qual a sua cor favorita?")
console.log("3. Qual a sua cor favorita?" , "Resposta: ", resposta3 )

let resposta4 = prompt("Você tem animais de estimação?")
console.log("4. Você tem animais de estimação?" , "Resposta: ", resposta4 )

let resposta5 = prompt("Qual país você tem vontade de conhecer?")
console.log("5. Qual país você tem vontade de conhecer?" , "Resposta: ", resposta5 )

//Exercício de escrita de código 3

//a.

const quilowatt = 0.05

console.log("O valor a ser pago é: R$", quilowatt * 280)

//b.

let consumo = (280 * 0.05)
let desconto = 0.85

console.log("O valor a ser pago com 15% de desconto é: R$", consumo * desconto)







