from flask import Flask, jsonify, request

app = Flask(__name__)

livros = [
    {
        'id': 1,
        'titulo': 'O senhor dos Anéis - A Sociedade do Anel',
        'autor': 'J.R.R Tolkien'
    },
    {
        'id': 2,
        'titulo': 'Harry Potter e a Pedra Filosofal',
        'autor': 'J.K. Rowling'
    },
    {
        'id': 3,
        'titulo': 'Hábitos Atômicos',
        'autor': 'James Clear'
    },
]

# Consultar todos os livros
@app.route('/livros', methods=['GET'])
def obter_livros():
    return jsonify(livros)

# Consultar livro por ID
@app.route('/livros/<int:id>', methods=['GET'])
def obter_livro_por_id(id):
    livro = next((livro for livro in livros if livro['id'] == id), None)
    if livro is not None:
        return jsonify(livro)
    else:
        return jsonify({'mensagem': 'Livro não encontrado'}), 404
      
# Criar Livro
@app.route('/livros', methods=['POST'])
def incluir_novo_livro():
  novo_livro = request.get_json()
  livros.append(novo_livro)
  
  return jsonify(livros)

# Editar livro
@app.route('/livros/<int:id>', methods=['PUT'])
def editar_livro(id):
    livro = next((livro for livro in livros if livro['id'] == id), None)
    if livro:
        dados = request.get_json()
        livro.update(dados)
        return jsonify(livro)
    else:
        return jsonify({'mensagem': 'Livro não encontrado'}), 404

# Excluir livro
@app.route('/livros/<int:id>', methods=['DELETE'])
def excluir_livro(id):
    global livros
    livros = [livro for livro in livros if livro['id'] != id]
    return jsonify({'mensagem': 'Livro excluído'})

if __name__ == '__main__':
    app.run(port=5000, host='localhost', debug=True)