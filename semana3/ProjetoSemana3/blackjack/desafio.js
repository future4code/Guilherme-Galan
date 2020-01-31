import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo de BlackJack do JigSaw!")

let maoJogador = []
let maoJigSaw = []
let cartasJogador = []
let cartasJigSaw = []


if(confirm("Quero jogar um jogo. Você está pronto ?")){
   for(let i = 0; i < 2; i++){
      const carta = comprarCarta()
      maoJogador.push(carta)
      cartasJogador.push(carta.texto)       
   }

   for(let i = 0; i < 2; i++){
     const carta = comprarCarta()
     maoJigSaw.push(carta)
     cartasJigSaw.push(carta.texto)
  }

var somaJogador = maoJogador[0].valor + maoJogador[1].valor
var somaJigSaw = maoJigSaw[0].valor + maoJigSaw[1].valor
  
  if(somaJogador === 22 || somaJigSaw === 22){
     maoJigSaw = []
     maoJogador = []

     for(let i = 0; i < 2; i++){
      const carta = comprarCarta()
      maoJogador.push(carta)
      cartasJogador.push(carta.texto)       
   }

   for(let i = 0; i < 2; i++){
     const carta = comprarCarta()
     maoJigSaw.push(carta)
     cartasJigSaw.push(carta.texto)
  }

   var somaJogador = maoJogador[0].valor + maoJogador[1].valor
   var somaJigSaw = maoJigSaw[0].valor + maoJigSaw[1].valor

  }
}else{
   console.log("Que pena! O jogo acabou.")
}

while(confirm("Suas cartas são: " + cartasJogador + " . A carta revelada do JigSaw é: " + maoJigSaw[0].texto + "\n" + "Deseja comprar outra carta ?")){
   const carta = comprarCarta()
   var somaJogador = somaJogador + carta.valor
   maoJogador.push(carta)
   cartasJogador.push(carta.texto)

   if(somaJogador >= 21){

      alert("O Jogo Acabou!!") 

      break  
 
    }   

}

while(somaJigSaw < somaJogador || somaJigSaw === 21){
   const carta = comprarCarta()
   var somaJigSaw = somaJigSaw + carta.valor
   maoJigSaw.push(carta)
   cartasJigSaw.push(carta.texto)
}

console.log("Suas cartas são:", cartasJogador, ". Sua pontuação é:", somaJogador)
console.log("As cartas do JigSaw são:", cartasJigSaw, ". A pontuação do JigSaw é:", somaJigSaw)

if(somaJogador > somaJigSaw && somaJogador < 21 || somaJogador === 21 || somaJogador < 21 && somaJigSaw > 21){
   console.log("O jogador venceu!!")
}else if(somaJogador < somaJigSaw && somaJigSaw <= 21 || somaJogador > 21 && somaJogador < 21){
   console.log("O JigSaw venceu!!")
}else if(somaJogador < 21 && somaJigSaw < 21 && somaJogador === somaJigSaw){
   console.log("Empate!!")
}else{
   console.log("O tempo acabou! Ninguém venceu.")
}









