# CorporatePhraseGenerator

Uma forma fácil de discutir em reuniões corporativas, trata-se de uma API que pode gerar até 10000 frases, portanto, será fácil impressionar sua equipe.

## Requirements

	* NodeJS
	* Express

## Instalação

Após clonar o repositório, acesse o diretório, instale as dependências, e rode o node com segundo argumento passando o nome do arquivo "app.js" e o terceiro argumento o número da porta desejada.

```sh
$ cd CorporatePhraseGenerator
$ npm install
$ node app.js 8080
```

Pronto, sua API já está pronta para consumo, para testar sua API vi curl:

```sh
$ curl -X GET \
  http://localhost:8080/get-phrase \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```
