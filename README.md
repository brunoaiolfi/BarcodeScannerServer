# BarcodeScanner

## Sobre o projeto:

- BarcodeScanner é uma aplicação desenvolvida para o cadastro de produtos.

## Sobre a API:

- Esta api tem o intuito de fazer o CRUD de produtos.

## Ferramentas utilizadas:

- NodeJs, Express, Prisma

## Passos iniciais 
  
-  Após baixar o repositório utilize um `yarn add` para fazer o download de todas as dependências.
-  Após isto crie um arquivo .env conforme o exemplo.
-  Crie uma migration do banco de dados utilizando `prisma migrate dev --name init`.
-  Inicie o projeto com o comando `yarn dev`.

## Rotas da api:

## Rotas públicas:

| Rota           | Método | Descrição                        |
|----------------|--------|----------------------------------|
| /user          | POST   | Cadastra um usuário              |
| /login         | POST   | Login na aplicação               |

## Rotas privadas (Precisam do token do usuário):

### USUÁRIO

| Rota           | Método | Descrição                        |
|----------------|--------|----------------------------------|
| /user/all      | GET    | Lista todos os usuários          |
| /user/byId?id  | GET    | Encontra um usuário pelo id      |
| /user?id       | PUT    | Edita um usuário                 |

### PRODUTOS

| Rota             | Método | Descrição                   |
|------------------|--------|-----------------------------|
| /product         | POST   | Cadastra um produto         |
| /product?id      | PUT    | Edita um produto            |
| /product/all     | GET    | Lista todos os produtos     |
| /product/byId?id | GET    | Encontra um produto pelo id |


