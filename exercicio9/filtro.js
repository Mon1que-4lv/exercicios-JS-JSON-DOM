// Exercício 9: Filtro em Tempo Real.
let todosUsuarios9 = [];

async function carregarUsuarios9() {
    // Mostrar loading e ocultar possível erro anterior
    document.getElementById('loadingUsuarios9').classList.remove('hidden');
    document.getElementById('erroUsuarios9').classList.add('hidden');
    document.getElementById('listaUsuarios9').innerHTML = '';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        todosUsuarios9 = await response.json();
        
        // Exibir todos os usuários inicialmente
        filtrarUsuarios9('');
        
    } catch (error) {
        const erroElement = document.getElementById('erroUsuarios9');
        erroElement.textContent = `Falha ao carregar usuários: ${error.message}`;
        erroElement.classList.remove('hidden');
    } finally {
        document.getElementById('loadingUsuarios9').classList.add('hidden');
    }
}

function exibirUsuarios9(usuarios) {
    const listaUsuariosElement = document.getElementById('listaUsuarios9');
    listaUsuariosElement.innerHTML = '';
    
    if (usuarios.length === 0) {
        listaUsuariosElement.innerHTML = '<p>Nenhum usuário encontrado.</p>';
        return;
    }
    
    usuarios.forEach(usuario => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${usuario.name}</h3>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Telefone:</strong> ${usuario.phone}</p>
        `;
        listaUsuariosElement.appendChild(card);
    });
}

// IMPLEMENTE ESTA FUNÇÃO PARA FILTRAR USUÁRIOS COM BASE NO TERMO DE BUSCA
function filtrarUsuarios9(termo) {
    // Filtrar todosUsuarios9 com base no termo (nome ou email)
    // Chamar exibirUsuarios9 com o resultado da filtragem
    const termoFiltrado = termo.toLowerCase();
    const usuariosFiltrados = todosUsuarios9.filter(usuario =>
        usuario.name.toLowerCase().includes(termoFiltrado) ||
        usuario.email.toLowerCase().includes(termoFiltrado)
    );
    exibirUsuarios9(usuariosFiltrados);
}

// Configuração do campo de filtro
function configurarFiltro9() {
    const filtroInput = document.getElementById('filtroUsuarios9');
    
    filtroInput.addEventListener('input', function() {
        filtrarUsuarios9(this.value);
    });
    
    // Limpar campo quando a página carregar
    filtroInput.value = '';
}

// Inicialização
window.addEventListener('DOMContentLoaded', function() {
    carregarUsuarios9();
    configurarFiltro9();
});
