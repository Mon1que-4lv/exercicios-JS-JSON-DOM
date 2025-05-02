// Exercício 8: Detalhes de um item selecionado
async function carregarListaUsuarios8() {
    // Mostrar loading e ocultar possível erro anterior
    document.getElementById('loadingUsuarios8').classList.remove('hidden');
    document.getElementById('erroUsuarios8').classList.add('hidden');
    document.getElementById('listaUsuarios8').innerHTML = '';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const usuarios = await response.json();
        
        const listaUsuariosElement = document.getElementById('listaUsuarios8');
        
        // Criar um item na lista para cada usuário
        usuarios.forEach(usuario => {
            const item = document.createElement('div');
            item.className = 'usuario-item';
            item.textContent = usuario.name;
            item.dataset.id = usuario.id; // Armazenar o ID do usuário como atributo data
            
            // Adicionar evento click
            item.addEventListener('click', function() {
                // Remover seleção anterior
                document.querySelectorAll('.usuario-item').forEach(el => {
                    el.classList.remove('selecionado');
                });
                
                // Adicionar classe de seleção ao item clicado
                this.classList.add('selecionado');
                
                // Carregar detalhes do usuário
                carregarDetalhesUsuario8(usuario.id);
            });
            
            listaUsuariosElement.appendChild(item);
        });
        
    } catch (error) {
        const erroElement = document.getElementById('erroUsuarios8');
        erroElement.textContent = `Falha ao carregar usuários: ${error.message}`;
        erroElement.classList.remove('hidden');
    } finally {
        document.getElementById('loadingUsuarios8').classList.add('hidden');
    }
}

// IMPLEMENTE ESTA FUNÇÃO PARA CARREGAR E EXIBIR OS DETALHES DE UM USUÁRIO
async function carregarDetalhesUsuario8(userId) {
    // Use a URL: `https://jsonplaceholder.typicode.com/users/${userId}`
    // Exiba detalhes como nome, email, telefone, website, endereço completo e empresa
    // Não se esqueça de tratar loading e erros
}

// Carregar lista de usuários quando o DOM estiver pronto
window.addEventListener('DOMContentLoaded', carregarListaUsuarios8);