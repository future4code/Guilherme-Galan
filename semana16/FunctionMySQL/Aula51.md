## Exercício 1
### A - 
**ALTER TABLE Actors DROP COLUMN salary;** - Comando para deletar a coluna salary.  
### B - 
**ALTER TABLE Actors CHANGE gender sex VARCHAR(6);** - Muda gender para sex e coloca um limite de 6 carácteres.
### C - 
**ALTER TABLE Actors CHANGE gender gender VARCHAR(255);** - Desfaz a mudança anterior e volta para um limite de 255 carácteres.
### D - 
**ALTER TABLE Actors CHANGE gender gender VARCHAR(100)**  
## Exercício 2  
### A - 
**UPDATE Actor
SET name = "Fernanda", birth_date= "1929/10/18"
WHERE id = "003"**  
### B -  
**UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005"**
E para voltar o nome: **UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005"**  
### C - 
**UPDATE Actor
SET name = "Juliana Paes ", salary = 750000, birth_date="1980/04/27", gender= "female"
WHERE id = "005"**  
### D -  
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Como não tem nenhum elemento com o id, não ocorreu nenhuma mudança.  
## Exercício 3  
### A -  
**DELETE FROM Actor WHERE name = "Fernanda Montenegro"**  
### B - 
**DELETE FROM Actor WHERE gender = "male" AND salary > 1000000  
## Exercício 4  
### A -  
**SELECT MAX(salary) FROM Actor**  
### B - 
**SELECT MIN(salary) FROM Actor WHERE gender = "female"**  
### C - 
SELECT COUNT(*) FROM Actor WHERE gender = "female"  
### D - 
**SELECT SUM(salary) FROM Actor**  
## Exercício 5
### A -  
A query está fazendo a contagem de quantos atores existem na tabela, depois agrupando o resultado por gênero, mostrando quantos homens e quantas mulheres temos na tabela.  
### B - 
**SELECT id, name FROM Actor
ORDER BY name DESC;**  
### C - 
SELECT * FROM Actor
ORDER BY salary  
### D - 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;  
### E - 
**SELECT AVG(salary), gender FROM Actor
GROUP BY gender;**  
## Exercício 6
### A - 
**ALTER TABLE Filmes ADD Último_dia_de_exibição DATE;**
### B -  
**ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT**  
### C - 
**UPDATE Filmes
SET Último_dia_de_exibição = "2020/20/03"
WHERE id = 1**  
### D - 
Nenhuma linha é modificada, pois não existe mais um filme com esse ID.  
## Exercício 7
### A -  
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5  
### B -  
**SELECT AVG(avaliacao) FROM Filmes**  
### C - 
SELECT COUNT(*) FROM Filmes WHERE Último_dia_de_exibição > CURDATE();  
### D - 
SELECT COUNT(*) FROM Filmes WHERE data_lancamento < CURDATE();  
### E - 
SELECT MAX(avaliacao) FROM Filmes;  
### F - 
SELECT MIN(avaliacao) FROM Filmes;  
## Exercício 8
### A -  
SELECT * FROM Filmes ORDER BY nome;  
### B -  
SELECT * FROM Filmes ORDER BY nome LIMIT 5;  
### C - 
SELECT * FROM Filmes WHERE data_lancamento < CURDATE() 
ORDER BY data_lancamento DESC 
LIMIT 3;  
### D - 
SELECT * FROM Filmes ORDER BY avaliacao DESC 
LIMIT 3;