# Solicitações de Compra

Este projeto permite aos usuários registrar pedidos de materiais de escritório, será possível solicitar compras, aprová-las ou reprová-las e consultar o status das solicitações. O backend é construído com Node.js e SQL Server.

## Funcionalidades

- **Solicitante**: Pode registrar solicitações de compra.
- **Aprovador**: Pode aprovar ou reprovar solicitações.
- **Administrativo**: Pode consultar o status das solicitações, filtrando por status, nome do solicitante e descrição do item.

## Configuração

### Requisitos

- Node.js
- SQL Server
- npm ou yarn

### Passos para Configuração

1. **Clone o repositório**

    ```bash
    git clone https://github.com/EricBernardi/server_office_supply.git
    cd server_office_supply
    ```

2. **Instale as dependências**

    ```bash
    npm install
    ```

3. **Configure o Banco de Dados**

    Crie seu login e senha no sql server.

    Após isso, crie o banco de dados e dentro do SQL Server Management Studio rode o seguinte script:

    ```sql
    CREATE TABLE Requests(
    id int identity(1,1) primary key,
    requesterName VARCHAR(255) not null,
    description text not null,
    price VARCHAR(255) not null,
    status VARCHAR(1),
    observations TEXT);
    ```

    Configure as credenciais do seu banco de dados SQL Server no arquivo `config/db.js`:

    ```javascript
    const config = {
        user: 'seuUsuario',
        password: process.env.PASSWORD_DB,
        server: 'seuServidor',
        database: 'Requests'
    };
    ```

    É necessário criar um arquivo `.env` na raiz do projeto contendo a variável `PASSWORD_DB`, ela será responsável por guardar sua senha do banco de dados:

    ```javascript
    PASSWORD_DB:'suaSenha'
    ```

4. **Inicie o servidor**

    ```bash
    npm start
    ```

5. **Acesse a aplicação**

    A aplicação estará disponível em `http://localhost:3000`.

## Scripts npm

- `start`: Inicia o servidor.
