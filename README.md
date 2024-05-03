# API de Livros

Esta API foi desenvolvida usando Flask para gerenciar uma coleção de livros.

## Rotas Disponíveis

### Consultar todos os livros

```
GET /livros
```

Retorna uma lista de todos os livros disponíveis.

### Consultar livro por ID

```
GET /livros/<id>
```

Retorna um livro específico com base no ID fornecido.

### Criar Livro

```
POST /livros
```

Adiciona um novo livro à coleção. O corpo da solicitação deve conter os detalhes do livro no formato JSON.

### Editar livro

```
PUT /livros/<id>
```

Atualiza os detalhes de um livro existente com base no ID fornecido. O corpo da solicitação deve conter os detalhes atualizados do livro no formato JSON.

### Excluir livro

```
DELETE /livros/<id>
```

Remove um livro da coleção com base no ID fornecido.

## Como usar

1. Clone o repositório.

2. Instale as dependências:

```bash
pip install -r requirements.txt
```

3. Inicie o servidor Flask:

```bash
python app.py
```

4. Acesse a API em http://localhost:5000/.

## Exemplo de uso

### Consultar todos os livros

```
GET http://localhost:5000/livros
```

### Consultar livro por ID

```
GET http://localhost:5000/livros/1
```

### Criar Livro

```
POST http://localhost:5000/livros
Content-Type: application/json

{
  "id": 4,
  "titulo": "Novo Livro",
  "autor": "Autor Desconhecido"
}
```

### Editar livro

```
PUT http://localhost:5000/livros/4
Content-Type: application/json

{
  "titulo": "Livro Editado"
}
```

### Excluir livro

```
DELETE http://localhost:5000/livros/4
```
