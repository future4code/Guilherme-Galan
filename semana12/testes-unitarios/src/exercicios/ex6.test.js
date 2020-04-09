import { primeirasLetrasParaMaiusculas } from "./ex6";

describe("Ordena array em ordem crescente", () => {
  it("Teste com a primeira frase", () => {
    const teste = "Oi! Sou uma string bem legal para testes!";
    const resultado = primeirasLetrasParaMaiusculas(teste);
    const novaFrase = "Oi! Sou Uma String Bem Legal Para Testes!"

    expect(resultado).toBe(novaFrase)
  });
  it("Teste com a segunda frase", () => {
    const teste = "Oi! eu também Sou uma string bem legal para testes!";
    const resultado = primeirasLetrasParaMaiusculas(teste);
    const novaFrase = "Oi! Eu Também Sou Uma String Bem Legal Para Testes!"

    expect(resultado).toBe(novaFrase)
  });
});
