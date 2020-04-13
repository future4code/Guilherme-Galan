export function primeirasLetrasParaMaiusculas(frase) {
    let arrayDePalavras = frase.split(' ')
    for (let i = 0; i < arrayDePalavras.length; i++) {
        let palavra = arrayDePalavras[i];
        arrayDePalavras[i] = palavra[0].toUpperCase() + palavra.slice(1);
    }
    return arrayDePalavras.join(' ')
}
