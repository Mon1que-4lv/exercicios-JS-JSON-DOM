// Exercício 3: Conversão entre String JSON e Objeto
let objetoAtual3 = null;

// Esta função já está implementada para você
document.getElementById('parsearJSON3').addEventListener('click', function() {
    const jsonString = document.getElementById('jsonString3').value;
    
    try {
        // Converter string JSON para objeto JavaScript
        objetoAtual3 = JSON.parse(jsonString);
        
        // Exibir resultado
        const resultadoDiv = document.getElementById('resultado3');
        resultadoDiv.innerHTML = `
            <p>Objeto convertido com sucesso!</p>
            <pre>${JSON.stringify(objetoAtual3, null, 2)}</pre>
        `;
    } catch (error) {
        document.getElementById('resultado3').innerHTML = `
            <p class="error">Erro ao converter JSON: ${error.message}</p>
        `;
    }
});

// IMPLEMENTE ESTAS FUNÇÕES:

// 1. Implemente o evento para o botão "Adicionar Propriedade"
// Deve adicionar uma nova propriedade "email" ao objeto
document.getElementById('modificarObjeto3').addEventListener('click', function () {
    const resultadoDiv = document.getElementById('resultado3');

    if (!objetoAtual3 || typeof objetoAtual3 !== 'object') {
        resultadoDiv.innerHTML = `
            <p class="error">Erro: objeto ainda não foi carregado. Por favor, converta a string JSON primeiro.</p>
        `;
        return;
    }

    objetoAtual3.email = "joao.silva@email.com";

    resultadoDiv.innerHTML = `
        <p>Propriedade "email" adicionada com sucesso!</p>
        <pre>${JSON.stringify(objetoAtual3, null, 2)}</pre>
    `;
});

// 2. Implemente o evento para o botão "Converter para JSON"
document.getElementById('voltarParaJSON3').addEventListener('click', function () {
    const resultadoDiv = document.getElementById('resultado3');

    if (!objetoAtual3 || typeof objetoAtual3 !== 'object') {
        resultadoDiv.innerHTML = `
            <p class="error">Erro: objeto ainda não foi carregado. Por favor, converta a string JSON primeiro.</p>
        `;
        return;
    }

    const jsonString = JSON.stringify(objetoAtual3, null, 2);

    resultadoDiv.innerHTML = `
        <p>Objeto convertido novamente para JSON:</p>
        <pre>${jsonString}</pre>
    `;
});
