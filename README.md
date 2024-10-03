# CypressAPITesting

## Descrição

Este projeto é destinado a testar a funcionalidade do endpoint **"Token"** utilizando o método **POST**. Ele foi desenvolvido utilizando a ferramenta Cypress.

## Estrutura do Projeto

- `package.json`: Contém as dependências do projeto e informações básicas.
- `cypress/e2e/token.spec.js`: Contém os testes automatizados para a API de geração de tokens.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/DiorgeCordeiro/CypressAPITesting.git

2. Navegue até o diretório do projeto:
    cd CypressAPITesting

3. Instale as dependências:
    npm install

### Testes
Os testes estão localizados no arquivo token.spec.js e incluem os seguintes cenários:

Gerar um token de acesso

Realiza uma requisição POST com credenciais válidas e espera um status 200 e a presença de um access_token na resposta.
Credenciais inválidas

Realiza uma requisição POST com credenciais inválidas e espera um status 401, com as propriedades error e error_description na resposta.
Parâmetros ausentes

Realiza uma requisição POST sem o parâmetro scope e espera um status 400, com as propriedades error e error_description na resposta.

### Execução dos Testes
Para executar os testes, use o seguinte comando:
    npx cypress open
Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os testes.

### Contribuições
Se você deseja contribuir com o projeto, fique à vontade para enviar um pull request ou abrir uma issue.