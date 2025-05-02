// Exercício 7: Paginação simples
let paginaAtual7 = 1;
const postsPerPage7 = 6;

async function carregarPostsPaginados7() {
    // Mostrar loading e ocultar possível erro anterior
    document.getElementById('loadingPosts7').classList.remove('hidden');
    document.getElementById('erroPosts7').classList.add('hidden');
    document.getElementById('listaPosts7').innerHTML = '';
    
    try {
        // A API já oferece parâmetros para paginação
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${paginaAtual7}&_limit=${postsPerPage7}`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const posts = await response.json();
        
        const listaPostsElement = document.getElementById('listaPosts7');
        
        // Verificar se existem posts
        if (posts.length === 0) {
            listaPostsElement.innerHTML = '<p>Nenhum post encontrado nesta página.</p>';
            return;
        }
        
        // Exibir os posts
        posts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            listaPostsElement.appendChild(card);
        });
        
        // Atualizar indicador de página
        document.getElementById('proximaPagina7').addEventListener('click', function() {
            paginaAtual7++;
            carregarPostsPaginados7();
        });
        
        // IMPLEMENTE AQUI: Habilitar/desabilitar botões de navegação
        // 1. Desabilitar botão "Anterior" quando estiver na primeira página
        // 2. Se a API retornar menos posts que o limite, estamos na última página
        //    e devemos desabilitar o botão "Próxima"


        // Habilitar/desabilitar botões de navegação
        const btnAnterior = document.getElementById('paginaAnterior7');
        const btnProxima = document.getElementById('proximaPagina7');

        // Desabilita o botão "Anterior" se estiver na primeira página
        btnAnterior.disabled = paginaAtual7 === 1;

        // Desabilita o botão "Próxima" se a quantidade de posts for menor que o limite por página
        btnProxima.disabled = posts.length < postsPerPage7;
        
    } catch (error) {
        const erroElement = document.getElementById('erroPosts7');
        erroElement.textContent = `Falha ao carregar posts: ${error.message}`;
        erroElement.classList.remove('hidden');
    } finally {
        document.getElementById('loadingPosts7').classList.add('hidden');
    }
}

// Configurar navegação
document.getElementById('paginaAnterior7').addEventListener('click', function() {
    if (paginaAtual7 > 1) {
        paginaAtual7--;
        carregarPostsPaginados7();
    }
});

// IMPLEMENTE A FUNÇÃO PARA O BOTÃO "PRÓXIMA"
document.getElementById('proximaPagina7').addEventListener('click', function() {
    // Seu código aqui
});

// Carregar primeira página quando o DOM estiver pronto
window.addEventListener('DOMContentLoaded', carregarPostsPaginados7);