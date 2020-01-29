// Exercícios de Interpretação

/* Exercício 1

O código está pedindo um número para o usuário e testando se o número é par ou ímpar.
Caso o número seja par a mensagem "Passou no teste" será exibida.
Caso o número seja ímpar a mensagem "Não passou no teste" será exibida.


*/

/* Exercício 2 

a. O código serve para mostrar o preço de uma fruta para o usuário.

b. O preço da fruta Maçã é R$ 2.25

c. O preço seria R$ 24.55.

d. O preço da fruta Pêra é R$ 5. Pois sem o break o programa continuaria para o default sobrescrevendo o preço inicial da pêra para o valor que está no default.


*/

/* Exercício 3 

Sim haverá o erro "mensagem is not defined", pois a variável dentro do console.log(mensagem) não está definida no escopo global, que seria fora do if pai, portanto só 
os filhos de if conseguem ter acesso a ela. Esse problema seria resolvido colocando o console.log(mensagem) dentro do bloco do if pai.

*/

//Exercícios de Escrita

//Exercício 4

//a. Se os números forem iguais o programa exibe a mensagem "Os números são iguais."

const primeiroNumero = Number(prompt("Digite um número:"))
const segundoNumero = Number(prompt("Digite outro número:"))

if(primeiroNumero > segundoNumero){
    console.log(primeiroNumero, "-", segundoNumero)
}else if(segundoNumero > primeiroNumero){
    console.log(segundoNumero, "-", primeiroNumero)
}else{
    console.log("Os números são iguais.")
}

//b. Se os números forem iguais o programa exibe a mensagem "Os números são iguais."

const primeiroNumero = Number(prompt("Digite um número:"))
const segundoNumero = Number(prompt("Digite outro número:"))
const terceiroNumero = Number(prompt("Digite mais um número:"))

if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero && segundoNumero > terceiroNumero){
    console.log(primeiroNumero, "-", segundoNumero, "-", terceiroNumero)
}else if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero && segundoNumero < terceiroNumero){
    console.log(primeiroNumero, "-", terceiroNumero, "-", segundoNumero)
}else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero && primeiroNumero > terceiroNumero){
    console.log(segundoNumero, "-", primeiroNumero, "-", terceiroNumero)
}else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero && primeiroNumero < terceiroNumero){
    console.log(segundoNumero, "-", terceiroNumero, "-", primeiroNumero)
}else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero && primeiroNumero > segundoNumero){
    console.log(terceiroNumero, "-", primeiroNumero, "-", segundoNumero)
}else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero && segundoNumero > primeiroNumero){
    console.log(terceiroNumero, "-", segundoNumero, "-", primeiroNumero)
}else{
    console.log("Os números são iguais.")
}

//c.

const primeiroNumero = Number(prompt("Digite um número:"))
const segundoNumero = Number(prompt("Digite outro número:"))
const terceiroNumero = Number(prompt("Digite mais um número:"))

if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero && segundoNumero > terceiroNumero){
    console.log(primeiroNumero, "-", segundoNumero, "-", terceiroNumero)
}else if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero && segundoNumero < terceiroNumero){
    console.log(primeiroNumero, "-", terceiroNumero, "-", segundoNumero)
}else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero && primeiroNumero > terceiroNumero){
    console.log(segundoNumero, "-", primeiroNumero, "-", terceiroNumero)
}else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero && primeiroNumero < terceiroNumero){
    console.log(segundoNumero, "-", terceiroNumero, "-", primeiroNumero)
}else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero && primeiroNumero > segundoNumero){
    console.log(terceiroNumero, "-", primeiroNumero, "-", segundoNumero)
}else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero && segundoNumero > primeiroNumero){
    console.log(terceiroNumero, "-", segundoNumero, "-", primeiroNumero)
}else{
    alert("Os números são iguais, por favor digite pelo menos um número diferente!!")
}



//Exercício 5

//a. Link do diagrama : https://drive.google.com/file/d/11NzJrDTj2xyztK02zwWPg7jctuGc6LsR/view?usp=sharing

//b.

alert("Responda todas as perguntas com Sim ou Não")
const ossos = prompt("O Animal tem ossos?")
const pelos = prompt("Tem Pelos?")
const racional = prompt("É Racional?")
const penas = prompt("Tem penas?")
const terrestre = prompt("É Terrestre?")
const ambiente = prompt("Passa parte da vida em ambiente Aquático?")


switch(ossos){
    case "Não":
        alert("É um invertebrado")
        break;
    case "Sim":  
        switch(pelos){
            case "Sim":
                switch(racional){
                    case "Sim":
                        alert("É um Humano")
                        break;
                    case "Não":
                        alert("É um mamífero não humano")
                        break;    
                }           
    case "Não":
        switch(penas){
            case "Sim":
                alert("É uma ave")
                break;
             case "Não":
                 switch(terrestre){
                     case "Não":
                         alert("É um Peixe")
                         break;
                     case "Sim":
                         switch(ambiente){
                             case "Sim":
                                 alert("É um anfíbio")
                                 break;
                             case "Não":
                                 alert("É um réptil")
                                 break;    
                         }    
                 }   
        }


        }  
}

// ******** DESAFIO ********


const nome = prompt("Seu nome completo:")
const tipo = prompt("Tipo de jogo IN ou DO:")
const etapa = prompt("Etapa de jogo SF, DT, FI:")
const categoria = prompt("Qual categoria ? 1, 2, 3 ou 4")
const quantidade = Number(prompt("Quantidade de ingressos:"))

switch(tipo){
    case "IN":
        var tipoDeJogo = "Internacional"
        var valor = valor * 4.1
        break;

    case "DO":
        var tipoDeJogo = "Doméstico"
        break;    
}

switch(etapa){
    case "SF":
        var etapaJogo = "Semi-final"
        break;

    case "DT":
        var etapaJogo =  "Decisão Terceiro Lugar"
        break;

    case "FI":
        var etapaJogo = "Final"
        break;
}

if(etapa === "SF" && categoria === "1" && tipo === "DO"){
    var valor = 1320
}else if(etapa === "SF" && categoria === "2" && tipo === "DO"){
    var valor = 880 
}else if(etapa === "SF" && categoria === "3" && tipo === "DO"){
    var valor = 550
}else if(etapa ==="SF" && categoria === "4" && tipo === "DO"){
    var valor = 220
}else if(etapa === "SF" && categoria === "1" && tipo === "IN"){
    var valor = 1320 * 4.10
}else if(etapa === "SF" && categoria === "2" && tipo === "IN"){
    var valor = 880 * 4.10
}else if(etapa === "SF" && categoria === "3" && tipo === "IN"){
    var valor = 550 * 4.10
}else{
    var valor = 220 * 4.10
}

if(etapa === "DT" && categoria === "1" && tipo === "DO"){
    var valor = 660
}else if(etapa === "DT" && categoria === "2" && tipo === "DO"){
    var valor = 440 
}else if(etapa === "DT" && categoria === "3" && tipo === "DO"){
    var valor = 330
}else if(etapa ==="DT" && categoria === "4" && tipo === "DO"){
    var valor = 170
}else if(etapa === "DT" && categoria === "1" && tipo === "IN"){
    var valor = 660 * 4.10
}else if(etapa === "DT" && categoria === "2" && tipo === "IN"){
    var valor = 440 * 4.10
}else if(etapa === "DT" && categoria === "3" && tipo === "IN"){
    var valor = 330 * 4.10
}else{
    var valor = 170 * 4.10
}

if(etapa === "FI" && categoria === "1" && tipo === "DO"){
    var valor = 1980
}else if(etapa === "FI" && categoria === "2" && tipo === "DO"){
    var valor = 1320 
}else if(etapa === "FI" && categoria === "3" && tipo === "DO"){
    var valor = 880
}else if(etapa ==="FI" && categoria === "4" && tipo === "DO"){
    var valor = 330
}else if(etapa === "FI" && categoria === "1" && tipo === "IN"){
    var valor = 1980 * 4.10
}else if(etapa === "FI" && categoria === "2" && tipo === "IN"){
    var valor = 1320 * 4.10
}else if(etapa === "FI" && categoria === "3" && tipo === "IN"){
    var valor = 880 * 4.10
}else{
    var valor = 330 * 4.10
}


console.log("---Dados da Compra---")
console.log("Nome do cliente: ", nome)
console.log("Tipo de jogo: ", tipoDeJogo)
console.log("Etapa do jogo:", etapaJogo)
console.log("Categoria: ", categoria)
console.log("Quantidade de Ingressos: ", quantidade)
console.log("---Valores---")
console.log("Valor do ingresso: R$", valor)
console.log("Valor total: R$", valor * quantidade)




