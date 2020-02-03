// Exercícios de Interpretação de código

/*Exercício 1

//a. [0]

//b. [0, 1, 2]

//c. [0, 1, 2, 3, 4]


*/

/*Exercício 2 

//a.O código imprime o índice de cada nome no console, 0 , 2 , undefined (no array está Paulinha e não Paula)

//b.Sim funcionaria, pois ao invéz de você comparar um array de strings com algum nome específico, vocÊ estaria comparando um array de números com algum número específico, funcionaria da mesma
forma o código iria retornar o índice do elemento(número) que você passou por parâmetro.


*/

/*Exercício 3 

A função está recebendo um array, no resultado A ela soma todos os números do array, e no resultado B ela multiplica todos os números do array, depois cria um novo array com o resultado da soma
e da multiplicação. Um nome melhor para a função seria function somaEMultiplicacao(array){}


*/

//Exercícios de Escrita de código

//Exercício 4

//a. 

const idadeCanina = (idade) =>{
    return idade * 7
}

console.log("A idade do seu cão é: " + idadeCanina(4) + (" anos."))

//b.

function informacoesPessoais(nome, idade, endereco, estudante){
    if(estudante === true){
        return msg = ("Eu sou " + nome + ", tenho " + idade + " anos," + " moro em " + endereco + " e sou estudande na Future4") 
    }else{
        return msg = "Eu sou " + nome + ", tenho " + idade + " anos," + " moro em " + endereco + " e não sou estudande."
    }

}
const nome = "Guilherme Galan"
const idade = 28
const endereco = "Rua Nossa Senhora das Merces 867"
const estudante = true

informacoesPessoais(nome, idade, endereco, estudante)

console.log(msg)

//Exercício 5

const verificaSeculo = (ano) =>{
    if(ano <= 1000 ){
        return "O ano " + ano + " pertence ao século X"
    }else if(ano > 1000 && ano < 1101){
        return "O ano " + ano + " pertence ao século XI"
    }else if(ano > 1100 && ano < 1201){
        return "O ano " + ano + " pertence ao século XII"
    }else if(ano > 1200 && ano <1301){
        return "O ano " + ano + " pertence ao século XIII"
    }else if(ano > 1300 && ano <1401){
        return "O ano " + ano + " pertence ao século XIV"
    }else if(ano > 1400 && ano <1501){
        return "O ano " + ano + " pertence ao século XV"    
    }else if(ano > 1500 && ano <1601){
        return "O ano " + ano + " pertence ao século XVI"
    }else if(ano > 1600 && ano <1701){
        return "O ano " + ano + " pertence ao século XVII"    
    }else if(ano > 1700 && ano <1801){
        return "O ano " + ano + " pertence ao século XVIII"
    }else if(ano > 1800 && ano <1901){
        return "O ano " + ano + " pertence ao século XIX"
    }else if(ano > 1900 && ano <2001){
        return "O ano " + ano + " pertence ao século XX"
    }else if(ano > 2000 && ano <2101){
        return "O ano " + ano + " pertence ao século XXI"   
}
}

const resultado = verificaSeculo(2020)

console.log(resultado)


//Exercício 6

//a.

function array(numerosA){   
    
        return numerosA.length    
}

const numerosA = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

console.log("O tamanho do array é: " + array(numerosA))

//b.

function verificaPar(numeroB){
    if(numeroB % 2 === 0){
        return true
    }else{
        return false
    }
}

let ePar = verificaPar(4)

console.log(ePar)

//c.

function quantidadeDePares(numerosC){
    let quantidade = 0
    for(const numero of numerosC){
        if(numero % 2 == 0){
             quantidade += 1
        }
    }
    
    return quantidade
}

const numerosC = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

console.log("A quantidade de números pares é : " + quantidadeDePares(numerosC))

//d.

function quantidadeDeParesD(numerosD){
    let quantidadeD = 0
    for(const numero of numerosD){
        if(verificaPar(numero) === true){
            quantidadeD +=1
        }
    }

    return quantidadeD
}

const numerosD = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

console.log("A quantidade de números pares utilizando a função do exercício B é : " + quantidadeDeParesD(numerosD))

