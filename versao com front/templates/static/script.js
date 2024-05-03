window.onload = function() {
    buscarLivros();
};

function buscarLivros() {
    fetch('/livros')
        .then(response => response.json())
        .then(data => {
            const livrosDiv = document.getElementById('livros');
            livrosDiv.innerHTML = '';
            data.forEach(livro => {
                const p = document.createElement('p');
                p.innerHTML = `${livro.titulo} por ${livro.autor} <button onclick="editarLivro(${livro.id})">Editar</button> <button onclick="excluirLivro(${livro.id})">Excluir</button>`;
                p.style.opacity = 0;
                livrosDiv.appendChild(p);
                fadeIn(p, 1000);
            });
        });
}

function adicionarLivro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    fetch('/livros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Date.now(), titulo: titulo, autor: autor })
    }).then(() => {
        buscarLivros(); // Atualizar lista após adição
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
    });
}

function editarLivro(id) {
    const titulo = prompt("Atualize o título do livro:");
    const autor = prompt("Atualize o autor do livro:");
    fetch(`/livros/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titulo: titulo, autor: autor })
    }).then(() => {
        buscarLivros();
    });
}

function excluirLivro(id) {
    fetch(`/livros/${id}`, {
        method: 'DELETE'
    }).then(() => {
        buscarLivros();
    });
}

function fadeIn(element, duration) {
    let op = 0.1;
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, duration / 50);
}

console.log("JavaScript carregado.");
window.onload = function() {
    console.log("Carregando livros...");
    buscarLivros();
};

function buscarLivros() {
    console.log("Buscando livros do servidor...");
    fetch('/livros')
        .then(response => response.json())
        .then(data => {
            console.log("Livros recebidos:", data);
            const livrosDiv = document.getElementById('livros');
            livrosDiv.innerHTML = '';
            data.forEach(livro => {
                const p = document.createElement('p');
                p.innerHTML = `${livro.titulo} por ${livro.autor} <button onclick="editarLivro(${livro.id})">Editar</button> <button onclick="excluirLivro(${livro.id})">Excluir</button>`;
                p.style.opacity = 0;
                livrosDiv.appendChild(p);
                fadeIn(p, 1000);
            });
        }).catch(error => console.error('Erro ao buscar livros:', error));
}