## Exercício 1
### A - 
**Round** está relacionado com a segurança da senha, quantas vezes a informação que queremos criptografar vai passar pelo **BlowFish**. Usamos um padrão de 12, mas o ideal é utilizar o maior número que o equipamento consiga processar em tempo adequado. **Salt** é uma string aleatória que é incluída no hash criptografado para aumentar a segurança e dificultar o trabalho dos **Black Hats**.
## Exercício 2  
### A - 
Primeiro devemos modificar o endpoint de cadastro, pois temos que cadastrar o usuário com a senha criptografada antes de fazer o login comparando a senha digitada com a senha criptograda.
### D - 
Não temos que modificar o endpoint  ```/user/profile``` pois a única coisa que ele precisa do usuário é o token, e para ter um token válido o usuário precisa passar pelos endpoints de **SignUp** e **Login**.