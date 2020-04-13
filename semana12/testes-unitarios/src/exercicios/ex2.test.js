import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("Testando a palavra mirim", () => {
    const word = "mirim";
    const result = checaPalindromo(word);

    expect(result).toBe(true);
  });

  it("Testando uma frase completa", () => {
    const string = "Socorram-me subi no onibus em marrocos";
    const testString = checaPalindromo(string);

    expect(testString).toBe(true);
  });
});
