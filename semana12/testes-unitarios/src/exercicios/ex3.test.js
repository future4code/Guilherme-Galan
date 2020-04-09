import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  it("Retora um número aleatório entre o max e min ", () => {
    const min = 10;
    const max = 50;
    const resultado = sorteiaNumero(min, max);
    const numeroSorteado = resultado > min && resultado < max;

    expect(numeroSorteado).toBe(true);
  });
});
