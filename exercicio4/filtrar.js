// Exercício 4: Filtragem de Dados JSON
// Array de produtos
const produtos4 = [
    { id: 1, nome: "Smartphone", preco: 1200, categoria: "Eletrônicos" },
    { id: 2, nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
    { id: 3, nome: "Camiseta", preco: 50, categoria: "Roupas" },
    { id: 4, nome: "Calça Jeans", preco: 90, categoria: "Roupas" },
    { id: 5, nome: "Chocolate", preco: 8, categoria: "Alimentos" },
    { id: 6, nome: "Mouse", preco: 40, categoria: "Eletrônicos" },
    { id: 7, nome: "Arroz", preco: 15, categoria: "Alimentos" },
    { id: 8, nome: "Vestido", preco: 120, categoria: "Roupas" }
];

// Função que exibe os produtos na página
function exibirProdutos(produtosParaExibir) {
    const listaProdutos = document.getElementById('listaProdutos4');
    listaProdutos.innerHTML = '';
    
    if (produtosParaExibir.length === 0) {
        listaProdutos.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }
    
    produtosParaExibir.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Categoria: ${produto.categoria}</p>
        `;
        listaProdutos.appendChild(card);
    });
}

// Inicialmente exibir todos os produtos
window.addEventListener('DOMContentLoaded', function() {
    exibirProdutos(produtos4);
});


// IMPLEMENTE ESTA FUNÇÃO:
// Deve filtrar os produtos com base no nome e categoria
document.getElementById('aplicarFiltro4').addEventListener('click', function() {
    // 1. Obter os valores dos campos de filtro
    const nomeFiltro = document.getElementById(`filtroProduto4`).value.toLowerCase();
    const categoriaFiltro = document.getElementById(`categoriaFiltro4`).value;

    // 2. Filtrar o array de produtos com base nos critérios
    const produtosFiltrados = produtos4.filter(produto => {
        const nomeCondicao = produto.nome.toLowerCase().includes(nomeFiltro);
        const categoriaCondicao = categoriaFiltro === '' || produto.categoria === categoriaFiltro;
        return nomeCondicao && categoriaCondicao;
    })
    // 3. Chamar a função exibirProdutos com o resultado da filtragem
    exibirProdutos(produtosFiltrados);
});