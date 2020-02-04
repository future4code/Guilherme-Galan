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

 console.log("Bem vindo ao jogo de BlackJack do JigSaw!") //Leve referência a Jogos Mortais

 let maoJogador = []
 let maoJigSaw = []

 if(confirm("Quero jogar um jogo. Você está pronto ?")){
    for(let i = 0; i < 2; i++){
       const carta = comprarCarta()
       maoJogador.push(carta)       
    }

    for(let i = 0; i < 2; i++){
      const carta = comprarCarta()
      maoJigSaw.push(carta)
   }

   const somaJogador = maoJogador[0].valor + maoJogador[1].valor
   const somaJigSaw = maoJigSaw[0].valor + maoJigSaw[1].valor
  
   console.log("Jogador - Cartas:",maoJogador[0].texto, maoJogador[1].texto," Pontuação:",somaJogador)
   console.log("JigSaw - Cartas:",maoJigSaw[0].texto, maoJigSaw[1].texto," Pontuação:",somaJigSaw)
  
   if(somaJogador > somaJigSaw){
      console.log("O Jogador ganhou!")
   }else if(somaJogador < somaJigSaw){
      console.log("O JigSaw ganhou!")
   }else{
      console.log("Empate!")
   }

 }else{
    console.log("Que pena! O jogo acabou.")
 }



