#Tomamos como base a versão 13.5.0 do node.js a mais recente do no dia 05/01/2020.
FROM node:13.5.0-alpine

# O Alpine não tem o gerenciador de pacotes "apt-get", mas sim o "apk"
# Abaixo é feita instalação do bash, isso no permite conectar no container usando o ssh_container [nome-container]
# OBS: Por padrão o alpine vem sem o bash, mas vem com o sh
RUN apk update && apk add bash

# Instalamos a linha de comando do Angular
RUN mkdir /projetos && cd /projetos && npm install -g @angular/cli

EXPOSE 4200

WORKDIR /projetos/jv

# Iniciamos o container com o bash
ENTRYPOINT ["/bin/bash"]