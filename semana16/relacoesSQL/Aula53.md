## Exercício 1
### A - 
Chave estrangeira é responsável por criar a referência de uma tabela com outra atráves de uma primary key.
### C - 
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_guilherme_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
**A query não consegue criar pois não encontra o id na tabela Movies que é referência para a FOREIGN KEY**
### E - 
**DELETE FROM Movies WHERE id = 1**
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_guilherme_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
Não é possível deletar um elemento que tem referências em outra tabela, primeiro temos que apagar todas as referências desse elemento.  
## Exercício 2  
### A - 
A tabela MovieCast é utilizada apenas para guardar as relações dos Atores/Filmes, com o id do filme e o id do ator, podemos dizer qual filme está relacionado com qual ator e vice - versa.
### C - 
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_guilherme_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
Não é possível criar uma relação entre filme e ator, se o filme ou ator não existirem.
### D - 
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_guilherme_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)).
Não é possível apagar um elemento que tem algum referência, antes temos que apagar todas as referências desse elemento.
## Exercício 3
### A - 
O operador **ON** serve parar fazermos a comparação entre os valores das tabelas relacionadas.
### B - 
SELECT m.id as movies_id, m.name as movie_name, r.rate as rating FROM Movies m
JOIN Rating r ON m.id = r.movie_id  
## Exercício 4  
### A - 
**SELECT m.id as movies_id, m.name as movie_name, r.rate as rating, r.comment as comment FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;**
### B - 
**SELECT m.id as movie_id, m.name as movie_name, mv.actor_id as actor_id FROM Movies m
RIGHT JOIN MovieCast mv ON m.id = mv.movie_id**  
### C - 
**SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);**  
## Exercício 5  
### A - 
Temos a necessidade do uso de 2 JOIN, pois primeiro temos que fazer a junção das informações de 2 tabelas (Movie e MovieCast) e só então juntar com as informações da terceira tabela (Actor), resultando em uma tabela com informações das 3 tabelas em questão.  
### B - 
SELECT m.id as movie_id, m.name as title, a.name as name_actor, a.id as id_actor FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;  
### C - 
A query retornou uma tabela com movie_id, title, name_actor e id_actor, mostrando todos os atores e filmes relacionados  
## Exercício 6
### A - 
É uma relação M:N pois um filme pode ganhar vários óscar e um óscar pode ser dado à vários filmes(em anos diferentes).
### B - 
**CREATE TABLE Oscar(
	name VARCHAR(255) PRIMARY KEY,
    winDate DATE,
    movie_id,
    FOREIGN KEY(movie_id) REFERENCES Movies(id)
)**
### D -
**SELECT m.name as title, o.name as oscar_name FROM Movies m
LEFT JOIN Oscar o ON m.id = o.movie_id**





