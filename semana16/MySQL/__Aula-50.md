## Exercício 1
#### A -   
**VARCHAR**: Utilizado para identificar strings e a quantidade máxima de carácteres,
**DATE**: Utilizado para identificar datas,
**PRIMARY KEY**: Identifica qual é o id,
**NOT NULL**: Define que o valor da linha não pode ser nulo.  
### B -  
O comando **SHOW DATABASES** retorna todos os bancos de dados disponíveis e o comando **SHOW TABLES** retorna todas as tabelas do banco de dados.  
### C -  
O comando **DESCRIBE Actor** exibe as linhas das colunas e seus valores(INT, VARCHAR, NOT NULL, etc)
O comando **SHOW COLUMNS FROM Actor** retorna todas as colunas da tabela Actor.  
## Exercício 2  
### A -  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
); 
### B -  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires - Error",
  1200000,
  "1963-08-23", 
  "female"
)   
Ao tentar criar outro elemento com o mesmo *id* temos o seguinte erro: **Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'** - *Entrada Duplicada 002 para chave Primary*, esse erro ocorreu pois a chave primária **PRIMARY KEY** tem que ser única, não pode se repetir.  
### C - 
Ao tentar rodar a query temos o seguinte erro: **Error Code: 1136. Column count doesn't match value count at row 1** - *Contagem de coluna não corresponde com a contagem de valores na linha 1*, para conseguirmos rodar a query temos que adicionar *birth_date* e *gender*  
INSERT INTO Actor (id, name, salary,birth_date,gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"  
);  
### D -  
Ao tentarmos rodar a query temos o seguinte erro: **Error Code: 1364. Field 'name' doesn't have a default value** - *Campo 'name' não tem um valor definido*, para arrumar bastar adicionar o nome
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Bino",
  400000,
  "1949-04-18", 
  "male"
);  
### E - 
Ao tentarmos rodar a query temos o seguinte erro: **Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1** - *Valor de data incorreto referente a coluna 'birth_date'*, arrumamos esse error colando a data entre "", pois ele espera uma string.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
)  
## Exercício 3  
### A - 
**SELECT * FROM Actor WHERE gender = "female"**  
### B -  
**SELECT salary FROM Actor WHERE name = "Tony Ramos"**  
### C -  
A query foi executada, porém não retornou nenhum valor pois não exite nenhum elemento com gender = "invalid".  
### D - 
**SELECT id, name, salary FROM Actor WHERE salary < 500**  
### E -  
No enunciado só tem uma query para testar, deu o seguinte erro **Error Code: 1054. Unknown column 'nome' in 'field list'** - *Coluna 'nome' é desconhecida*, deu esse erro pois a coluna se chama "name". **SELECT id, name from Actor WHERE id = "002"**  
## Exercício 4  
### A - 
A query está selecionando todas as informações da tabela Actor dos elementos que começam com A ou J e tem o salário maior que 300000.  
### B - 
**SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000**  
### C -  
**SELECT * FROM Actor WHERE name LIKE "%G%" or name LIKE "%g%"**  
### D - 
**SELECT * FROM Actor
WHERE (name LIKE "%G%" or name LIKE "%g%" or name LIKE "%A%" or name LIKE "%a%") 
AND salary BETWEEN 350000 AND 900000**  
## Exercício 5  
### A -  
**CREATE TABLE Filmes (
    id INT PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,    
    data_lancamento DATE NOT NULL,
    sinopse TEXT NOT NULL,
    avaliacao INT NOT NULL		
);**
Query para criar uma tabela com o nome Filmes e as seguintes informações: id, nome, data_lancamento, avaliacao, onde nenhum valor pode ser *NULO*.  
## Exercício 6  
### A - 
**SELECT id, nome, avaliacao FROM Filmes WHERE id = "1"** 
### B - 
**SELECT * FROM Filmes WHERE nome = "Tropa de Elite"**  
### C - 
**SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7**  
## Exercício 7  
### A -  
**SELECT * FROM Filmes WHERE name LIKE "%vida%"**

