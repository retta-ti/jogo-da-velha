# Jogo da Velha
Este projeto foi gerado usando Node.Js 13.5.0, Docker e  [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.21.


# Tecnologias envolvidas

* Node.js
* Docker
* Angular


## Configurar ambiente de desenvolvimento

Baixar o projeto:

`git clone https://github.com/retta-ti/jogo-da-velha.git`


Entrar na pasta do projeto:

`cd jogo-da-velha`


Levantar o container docker:

`docker-compose -f docker-compose.yml up -d --build`


Acessar o container:

`ssh_container jogo-da-velha`


Iniciar a aplicação Angular:

`ng serve --host 0.0.0.0`

Com isso você pode acessa a aplicação no endereço:

http://localhost:4200/
