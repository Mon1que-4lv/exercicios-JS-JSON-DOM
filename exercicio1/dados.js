// Exercício 1: Exibição simples de JSON
document.getElementById('carregarDados1').addEventListener('click', function() {
    // Objeto JSON simples (normalmente viria de uma API)
    const pessoa = {
        "nome": "Carlos Silva",
        "idade": 28,
        "email": "carlos.silva@exemplo.com",
        "ativo": true,
        "profissao": "Padeiro",
        "cidade": "Ubatuba"
    };
    
    // Selecionar div onde os dados serão exibidos
    const dadosDiv = document.getElementById('dados1');
    
    // Criar HTML para exibir os dados
    dadosDiv.innerHTML = `
        <p><strong>Nome:</strong> ${pessoa.nome}</p>
        <p><strong>Idade:</strong> ${pessoa.idade}</p>
        <p><strong>Email:</strong> ${pessoa.email}</p>
        <p><strong>Status:</strong> ${pessoa.ativo ? 'Ativo' : 'Inativo'}</p>
        <p><strong>Profissao:</strong> ${pessoa.profissao}</p>
        <p><strong>Cidade:</strong> ${pessoa.cidade}</p>
    `;
});