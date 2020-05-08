## Criação da Tabela de Usuários

CREATE TABLE ToDoListUser(
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

## Criação da Tabela de Tasks

CREATE TABLE ToDoListTask (
	id INT PRIMARY KEY auto_increment, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id INT NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES ToDoListUser(id)
);