import { ordenarArrayEmOrdemCrescente } from "./ex5";

describe("Ordena array em ordem crescente", () => {
  it("O array deverá ser ordenado de forma crescente", () => {
    const teste = [4, 2, 3, 2, 1, 5, 10, 20, 19, 15];
    const resultado = ordenarArrayEmOrdemCrescente(teste);

    expect(resultado).toMatchObject([1,2,2,3,4,5,10,15,19,20])
  });
});
