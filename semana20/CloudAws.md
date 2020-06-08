### Exercício 1.4

Foi bem tranquilo realizar todos os passos seguindo os tutoriais, não tive nenhum problema. Apenas na parte do nome de usuário, ele não pediu pra criar o nome, apenas a senha, então assumi que ele criou um usuário 'root', deu certo o comando de PRIVILEGES nesse usuário, então acho que está tudo certo.

### Exercício 2.1
Primeiro temos que criar a máquina virtual(EC2), instalar nvm / node, criar ou clonar um projeto React, instalar as dependências necessárias, abrir a/as portas necessárias para o projeto ficar acessível.
### Exercício 2.3
Para acessar minha EC2 utilizei o comando -> ```ssh -i "ec2-guilherme.pem" ubuntu@ec2-54-210-88-118.compute-1.amazonaws.com```
### Exercício 2.4
Criei uma pasta para o projeto com -> ```mkdir FutureCar```  
Clonei o repositório -> ```git clone https://github.com/future4code/sagan-future-car.git```  
Instalei as dependências do projeto -> ```npm i```
A porta 3000 já estava configurada então rodei o projeto -> ```npm run start```
### Exercício 2.6
Criei um build para o projeto -> ```npm run build```  
Mudei para a pasta build -> ```cd build```  
Rodei o Script Python -> ```sudo python -mSimpleHTTPServer 80```
### Exercício 2.7
Basicamente a única diferença foi que em aula criamos um projeto novo, agora clonamos um projeto já existente no GitHub, tendo que instalar as depêndencias necessárias para o projeto rodar. A parte de configuração de porta foi a mesma, não foi necessário refazer.  
