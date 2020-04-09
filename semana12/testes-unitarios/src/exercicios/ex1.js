export function anoBissexto(ano) {
  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    console.log("É Bissexto");
  } else {
    console.log("Não é Bissexto");
  }
}




