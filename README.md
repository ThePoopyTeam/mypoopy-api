# My Poopy API

Servidor em Nodejs do app MyPoopy.

## Requisitos para instalar

Para rodar o servidor tenha em mente que você deve ter 
o Nodejs instalado na sua maquina.

Segue o link para download:
https://nodejs.org/en/


## Instalação

Para instalar o servidor basta rodar o comando abaixo no terminal:

```
git clone https://github.com/ThePoopyTeam/mypoopy-api.git mypoopy-api

cd mypoopy-api

npm install
```

## Como rodar o servidor

Para rodar o servidor basta digitar o comando abaixo. O servidor estará rodando no
em http://localhost:3000.

```
node server
```

## Endpoints

Abaixo segue a lista dos principais endpoints do servidor. 
A URI princiapal é **http://localhost:3000/api/**

Endpoints:

* GET USUÁRIOS - http://localhost:3000/api/user/
* POST USUÁRIO - http://localhost:3000/api/user/
* GET BANHEIROS - http://localhost:3000/api/bathroom/
* POST BANHEIRO - http://localhost:3000/api/bathroom/

Todos os endpoints são validados através do **UID** do usuário.
Você deve passar o UID na header das requests.


## POSTMAN
Segue o link das collections do postman para teste local:
https://www.getpostman.com/collections/d669fea7a6ed3b105725
