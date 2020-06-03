### Exercício 3- C
A implementação utilizando inversão de dependências, nós alteramos a dependência da função performAttack ter que chamar a função validateCharacter para validar o input.

### Exercício 4- A
Devemos criar o mock da função validateCharacter, pois é ela que valida se o input(Character) é válido ou não e na função performAttack invertemos essa dependência.