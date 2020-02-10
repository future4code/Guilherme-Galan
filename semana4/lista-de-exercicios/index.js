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

//Exercícios de Objetos

/*Exercício 1

Array é uma estrutura de dados que pode armazenar vários elementos.
Objeto é uma estrutura que armazena várias propriedades onde cada propriedade pode ter um nome e valor específicos.   
 
*/

//Exercício 2
console.log("---------------Exercicio Objetos 2-------------------")

function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2)
    }

    return retangulo
}

console.log(criaRetangulo(2, 3))

//Exercício 3
console.log("---------------Exercicio Objetos 3-------------------")

const filmeFavorito = {
    titulo: "8 Mile - Rua das Ilusões",
    ano: 2002,
    diretor: "Curtis Hanson",
    atores: ["Eminem", "Proof", "Kim Basinger."]
}

console.log("Venha assistir ao filme " + filmeFavorito.titulo + ", de " + filmeFavorito.ano + " dirigido por " + filmeFavorito.diretor + " e estreiado por " + filmeFavorito.atores)

//Exercicio 4
console.log("---------------Exercicio Objetos 4-------------------")

const pessoa = {
    nome: "Guilherme",
    idade: 28,
    email: "gui_galan@hotmail.com",
    endereco: "Rua Nossa Senhora das Mercês"
}


function anonimizarPessoa() {
    const pessoaAnonima = {
        ...pessoa,

        nome: "Anônimo"

    }

    return pessoaAnonima


}

console.log(pessoa, anonimizarPessoa())

//Exercícios de Funções de Array

//Exercício 1

//a.
console.log("---------------Exercicio Funções Array 1 a.-------------------")

const arrayPessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]

const pessoasAdultas = arrayPessoas.filter((pessoa, index, array) => {
    if (pessoa.idade >= 20) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade
        }

    }


})

console.log(arrayPessoas)
console.log(pessoasAdultas)

//b.
console.log("---------------Exercicio Funções Array 1 b.-------------------")

const pessoasMenoresDeIdade = arrayPessoas.filter((pessoa, index, array) => {
    if (pessoa.idade < 20) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade
        }

    }


})

console.log(arrayPessoas)
console.log(pessoasMenoresDeIdade)

//Exercício 2

//a.
console.log("---------------Exercicio Funções Array 2 a.-------------------")

const arrayPadrao = [1, 2, 3, 4, 5, 6]

const multiplicaPor2 = arrayPadrao.map((numero, index, array) => {
    return numero * 2
})

console.log(arrayPadrao)
console.log(multiplicaPor2)

//b.
console.log("---------------Exercicio Funções Array 2 b.-------------------")

//B
function multiplicarPor3(array) {
    const arrayPor3 = array.map((numero) => {
      return `${numero * 3}`
    })
    return arrayPor3
  }
  
  let arrayTriplicado = multiplicarPor3(arrayPadrao)  
  
  console.log(arrayTriplicado)

//c.
console.log("---------------Exercicio Funções Array 2 c.-------------------")

function imprimeParOuImpar(array) {
    const arrayParOuImpar = array.map((elemento, index, array) => {
      if (elemento % 2 === 0) {
        return `${elemento} é par`
      }
      else {
        return `${elemento} é impar`
      }
    })
    return arrayParOuImpar
  }
  
  let arrayParOuImpar = imprimeParOuImpar(arrayPadrao)  
  
  console.log(arrayParOuImpar)

//Exercício 3

//a.
console.log("---------------Exercicio Funções Array 3 a.-------------------")

const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 }
]

const pessoasQuePodemEntrar = pessoas.filter((pessoa, index, array) => {
    if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade,
            altura: pessoa.altura
        }
    }
})

console.log(pessoas)
console.log(pessoasQuePodemEntrar)

//b.
console.log("---------------Exercicio Funções Array 3 b.-------------------")

const pessoasQueNaoPodemEntrar = pessoas.filter((pessoa, index, array) => {
    if (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade,
            altura: pessoa.altura
        }
    }
})

console.log(pessoas)
console.log(pessoasQueNaoPodemEntrar)

//Exercício 4
console.log("---------------Exercicio Funções Array 4-------------------")

const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let arrayEmails = []

for (consulta of consultas) {
    let genero = ""
    let senhorOuSenhora = ""
    if (consulta.genero === "masculino") {
        genero = "Lembrá-lo"
        senhorOuSenhora = "Sr. "
    } else {
        genero = "Lembrá-la"
        senhorOuSenhora = "Sra. "
    }

    if (consulta.cancelada === true) {

        arrayEmails.push("Olá, " + senhorOuSenhora + consulta.nome + ". Estamos enviando esta mensagem para " + genero + " da sua consulta no dia " + consulta.dataDaConsulta + ". Por favor acuse o recebimento deste email.")
    }
    else {
        arrayEmails.push("Olá, " + senhorOuSenhora + consulta.nome + ". Infelizmente, sua consulta marcada para o dia " + consulta.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la")
    }
}
console.log(arrayEmails)






//Exercício 5
console.log("---------------Exercicio Funções Array 5-------------------")

const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function totalDasCompras(array){
    let total = 0
    array.forEach((compra) => {
        total += compra

    })

    return total
}

contas.forEach((pessoa) =>{
    let somaCompras = totalDasCompras(pessoa.compras)
    pessoa.saldoTotal -= somaCompras
})

console.log(contas)