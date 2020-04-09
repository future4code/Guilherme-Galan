import { removeItensDuplicados } from "./ex4";

describe("Remove itens duplicados", () => {
  it("Remover o número 2 duplicado no array", () => {
    const teste = [1, 2, 3, 2, 4];
    const resultado = removeItensDuplicados(teste);

    expect(resultado).toEqual([1, 2, 3, 4])
  });

  it("Remover valores duplicas do array", () => {
    const test = [1,1,2,2,3,3,4,4,5,5];
    const resultado = removeItensDuplicados(test);

    expect(resultado).toEqual([1,2,3,4,5])
  })
});
