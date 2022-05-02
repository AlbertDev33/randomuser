# Conteúdo da API

Apesar desse projeto ser bastante simples - listar usuários de uma API - foi implementada uma API para lhe dar com as requisições. O intuíto foi demonstrar a implementação de uma API utilizando algumas boas práticas de desenvolvimento, utilizando recursos de clean architecture, SOLID e alguns patterns.

Nessa API foi implementada algumas camadas da clean architecture, como entities, main, use cases (nessa API denominada services), Gateways e Controllers.

Buscando desacoplamento, foi implementado injeção de dependências, inversão de dependências, responsabilidade única e o princípio de substituição de Liskov, pois, foram implementados contratos (interfaces) para garantir o comportamento das classes. Testes automatizados com Jest também foram implementados.

### Rotas de recursos

**GET**: **'/list'**
- Rota para listage dos usuários. Essa rota pode receber por query parameter a quantidade de itens que devem ser listados. O retorno sempre será simulando usuários da região do Brasil.

Ao ser invocada, essa rota retorna uma lista contendo dados aleatórios de usuários, conforme abaixo:
```json
    {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "coordinates": {
          "latitude": "20.9267",
          "longitude": "-7.9310"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "brad.gibson@example.com",
      "login": {
        "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        "username": "silverswan131",
        "password": "firewall",
        "salt": "TQA1Gz7x",
        "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
        "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
      },
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      "registered": {
        "date": "2002-05-21T10:59:49.966Z",
        "age": 17
      },
      "phone": "011-962-7516",
      "cell": "081-454-0666",
      "id": {
        "name": "PPS",
        "value": "0390511T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "IE"
    }
  ],
  "info": {
    "seed": "fea8be3e64777240",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
```

**Ferramentas utilizadas na API**:

- Express para criar o servidor da API;
- Axios para implementar as requisições para a API de listage de usuários;
- Typescript para garantir uma tipagem forte e possibilitar algumas boas práticas que não são possíveis com apenas Javascript;
- Jest para criar testes automatizados;
- Supertest para auxiliar no teste de integração;
- Ferramentas de lint, como Eslint e Prettier.

### Como executar a API

* Primeiramente é necessário instalar as dependências com yarn ou npm;
* O próximo passo é executar o comando ```yarn dev``` ou ```npm run dev``` para executar o servidor local. O servidor está, por default, executando na porta 3333;
* A rota para obter os dados é a ```http://localhost:3333/list```.

### Executar os testes

* Após instalação das dependências do projeto, descrita no item anterior, execute o comando ```yarn test``` ou ```npm run test```.


# Conteúdo do app web

A tecnologia escolhida para criar o projeto web dessa aplicação foi o Next.js. Sua escolha se deu por seu recurso de renderização pelo lado do servidor. Essa possibilidade traz grandes ganhos no quesito performance.

- Na página **index.tsx** foi implementada a função **getStaticProps** para gerar uma página estática, sendo revalidada a cada 10 segundos. Esse valor de revalidação é configurável de acordo com a necessidade do projeto. Gerar páginas estáticas evita chamadas para a API dentro do intervado determinado na propriedade ```revalidate```, dando mais performance para o app, pois a cada 10 segundos - nesse exemplo - a chamada para a API é armazenada em cache pelo Next.js, gerando uma experiência de performance muito boa para o usuário do app.

- Na página inicial são listados 12 usuários(as). Há a possibilidade de clicar no nome de cada um para visualizar mais detalhes desse usuário.

- No momento da execução da página inicial, um cache, com todos os usuário listados é criado para que possa ser buscado na página de detalhes, através de um id do tipo uuid.

### Como executar o projeto web

* Primeiramente é necessário instalar as dependências com yarn ou npm;
* O próximo passo é executar o comando ```yarn dev``` ou ```npm run dev``` para executar o app em ambiente de desenvolvimento.

**Ferramentas utilizadas no projeto web**:

- Axios para implementar as requisições para a API de listage de usuários;
- Typescript para garantir uma tipagem forte.


# Importante

**Para que o app funcione a API deve estar rodando em ```http://localhost:3333```. Caso a rota da API seja alterada, a função request, na página util deve ser atualizada com a nova rota.**