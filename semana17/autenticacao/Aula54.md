## Exercício 1
### A - 
Usar **Strings** para representar os ids se torna mais vantajoso pois com strings podemos ter um maior número de registros únicos, diminuindo a chance de ter uma colisão entre os ids.  
## Exercício 2
### A -
Primeiro estamos definindo o nome da tabela que está no banco com a variável **userTableName**, depois criamos a conexão com o banco através do knex e por fim temos a função que cria um usuário na tabela.
### B - 
**CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);**
## Exercício 3
### A -
O as string é necessário para deixarmos claro pro TypeScript tipar aquilo como string.
## Exercício 7
### A - 
**as any** é utilizado para não termos problemas com retornos undefined.
