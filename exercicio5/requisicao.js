// Exercício 5: Consumo de API básico
document.getElementById('carregarUsuarios5').addEventListener('click', async function() {
    // Mostrar loading e ocultar possível erro anterior
    document.getElementById('loadingUsuarios5').classList.remove('hidden');
    document.getElementById('erroUsuarios5').classList.add('hidden');
    document.getElementById('listaUsuarios5').innerHTML = '';

    try {
        // Fazer requisição para a API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        // Converter resposta para JSON
        const usuarios = await response.json(); // Aqui está a correção

        // Obter o elemento onde os cards serão adicionados
        const lista = document.getElementById('listaUsuarios5');
        
        // Percorrer o array de usuários e criar um card para cada um
        usuarios.forEach(usuario => {
            const card = document.createElement('div');
            card.classList.add('card'); 

            // Criar o título com o nome do usuário
            const nome = document.createElement('h3');
            nome.textContent = usuario.name;

            // Criar o parágrafo com o email do usuário
            const email = document.createElement('p');
            email.textContent = 'Email: ' + usuario.email;

            const empresa = document.createElement('p');
            empresa.textContent = 'Empresa: ' + usuario.company.name;

            const telefone = document.createElement('p');
            telefone.textContent = 'Telefone: ' + usuario.phone;

            const website = document.createElement('p');
            website.textContent = 'Website: ' + usuario.website;

            // Adiciona os elementos dentro do card
            card.appendChild(nome);
            card.appendChild(email);
            card.appendChild(empresa);
            card.appendChild(telefone);
            card.appendChild(website);  

            // Adiciona o card ao elemento da lista
            lista.appendChild(card);
        });

    } catch (error) {
        // Exibir mensagem de erro
        const erroElement = document.getElementById('erroUsuarios5');
        erroElement.textContent = `Falha ao carregar usuários: ${error.message}`;
        erroElement.classList.remove('hidden');
    } finally {
        // Ocultar loading
        document.getElementById('loadingUsuarios5').classList.add('hidden');
    }
});