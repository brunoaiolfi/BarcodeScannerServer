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

| Rota    | Método | Descrição |
|---------|--------|-----------|
| /signIn | POST   | Login     |

## Rotas privadas:

### USUÁRIO

| Rota                  | Método | Descrição                        |
|-----------------------|--------|----------------------------------|
| /user                 | POST   | Cadastrar usuário                |
| /user?id              | PUT    | Editar usuário                   |
| /user/editPassword?id | PATCH  | Editar senha do usuário          |
| /user/all             | GET    | Pegar todos usuários             |
| /user/byId?id         | GET    | Pegar usuário pelo id            |
| /user/byEmail?email   | GET    | Pegar usuário pelo email         |
| /me                   | GET    | Pegar os dados do usuário logado |
| /user?id              | DEL    | Deletar usuário                  |

### PRODUTOS

| Rota             | Método | Descrição             |
|------------------|--------|-----------------------|
| /Product         | POST   | Cadastrar produto     |
| /Product?id      | PUT    | Editar produto        |
| /Product/all     | GET    | Pegar todos produtos  |
| /Product/byId?id | GET    | Pegar produto pelo id |
| /Product?id      | DEL    | Deletar produto       |

