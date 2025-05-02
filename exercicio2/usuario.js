// Exercício 2: Carregamento de Array JSON
document.getElementById('carregarUsuarios2').addEventListener('click', function() {
    // Array de usuários (normalmente viria de uma API)
    const usuarios = [
        {
            "id": 1,
            "nome": "Ana Costa",
            "email": "ana.costa@exemplo.com",
            "idade": 32
        },
        {
            "id": 2,
            "nome": "Bruno Martins",
            "email": "bruno.martins@exemplo.com",
            "idade": 27
        },
        {
            "id": 3,
            "nome": "Carla Souza",
            "email": "carla.souza@exemplo.com",
            "idade": 41
        }
    ];
    
    // Selecionar div onde os usuários serão exibidos
    const usuariosDiv = document.getElementById('usuarios2');
    
    // Limpar conteúdo anterior
    usuariosDiv.innerHTML = usuarios.map(usuarios => `
        <div class="card">
        <p><trong>Id:</trong> ${usuarios.id} <p/>
        <p><strong>Nome:</strong> ${usuarios.nome} </p>
        <p><strong>Email:</strong> ${usuarios.email}</p> 
        <p><strong>Idade:</strong> ${usuarios.idade}</p>
        <div/>
    `).join('');

    // PARTE QUE VOCÊ PRECISA IMPLEMENTAR:
    // Percorrer o array de usuários e criar um card para cada um
    // Dica: utilize um forEach ou map e crie elementos HTML para cada usuário
    // ...
});