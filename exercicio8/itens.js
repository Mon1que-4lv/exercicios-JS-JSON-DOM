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
    const detalhesContainer = document.getElementById('detalhesUsuario8');
    const loadingElement = document.getElementById('loadingDetalhes8');
    const erroElement = document.getElementById('erroDetalhes8');

    // Limpar conteúdo anterior
    detalhesContainer.innerHTML = '';
    erroElement.classList.add('hidden');
    loadingElement.classList.remove('hidden');
    detalhesContainer.classList.add('hidden');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const usuario = await response.json();

        const enderecoCompleto = `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city} - ${usuario.address.zipcode}`;

        detalhesContainer.innerHTML = `
            <p><strong>Nome:</strong> ${usuario.name}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Telefone:</strong> ${usuario.phone}</p>
            <p><strong>Website:</strong> <a href="http://${usuario.website}" target="_blank">${usuario.website}</a></p>
            <p><strong>Endereço:</strong> ${enderecoCompleto}</p>
            <p><strong>Empresa:</strong> ${usuario.company.name}</p>
        `;
        detalhesContainer.classList.remove('hidden');

    } catch (error) {
        erroElement.textContent = `Erro ao carregar detalhes: ${error.message}`;
        erroElement.classList.remove('hidden');
    } finally {
        loadingElement.classList.add('hidden');
    }
}


// Carregar lista de usuários quando o DOM estiver pronto
window.addEventListener('DOMContentLoaded', carregarListaUsuarios8);