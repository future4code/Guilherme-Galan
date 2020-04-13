import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  it("Se o ano for múltiplo de 4, imprime no console  É Bissexto", () => {
    console.log = jest.fn();
    const ano = 1600;

    anoBissexto(ano);

    expect(console.log).toHaveBeenCalledWith("É Bissexto");
  });
  it("Se o ano for múltiplo de 4 e múltiplo de 100 mas não de 400,É Bissexto ", () => {
    console.log = jest.fn();
    const ano = 2016;

    anoBissexto(ano);

    expect(console.log).toHaveBeenCalledWith("É Bissexto");
  });
  it("Todos os outros anos não são bissextos", () => {
    console.log = jest.fn();
    const ano = 2001;

    anoBissexto(ano);

    expect(console.log).toHaveBeenCalledWith("Não é Bissexto");
  });
});
