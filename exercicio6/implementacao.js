// Exercício 6: Criação de uma função para carregar posts
// IMPLEMENTE COMPLETAMENTE ESTA FUNÇÃO:
// Use como base o exercício anterior, mas para carregar posts ao invés de usuários
document.getElementById('carregarPosts6').addEventListener('click', async function() {
    // Implemente aqui uma função semelhante à do exercício anterior
    // Use a URL: 'https://jsonplaceholder.typicode.com/posts?_limit=8'
    // Exiba título e corpo de cada post em cards
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=8';
    const loadingEl = document.getElementById('loadingPosts6');
    const erroEl = document.getElementById('erroPosts6');
    const listaEl = document.getElementById('listaPosts6');

// Limpa estados anteriores
    erroEl.classList.add('hidden');
    erroEl.textContent = '';
    listaEl.innerHTML = '';
    loadingEl.classList.remove('hidden');

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao carregar: ${resposta.status}`);
        }

        const posts = await resposta.json();
        loadingEl.classList.add('hidden');

        posts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            listaEl.appendChild(card);
        });
    } catch (erro) {
        loadingEl.classList.add('hidden');
        erroEl.textContent = `Erro: ${erro.message}`;
        erroEl.classList.remove('hidden');
    }
});

