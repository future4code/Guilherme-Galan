export function checaPalindromo(frase) {
    let palindromo = null;
    let fraseSemTraco = frase.replace(/-/g, " ");
    let fraseSemEspaco = fraseSemTraco.replace(/ /g, "");
    let fraseInvertida = fraseSemEspaco
      .split("")
      .reverse()
      .join("");
    if (fraseSemEspaco.toLowerCase() === fraseInvertida.toLowerCase()) {
      return  palindromo = true;
    }else{
        return palindromo = false
    }

  }
  