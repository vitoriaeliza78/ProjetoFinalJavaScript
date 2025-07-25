document.addEventListener('DOMContentLoaded', function () {
    let botaoAdicionar = document.querySelector('button');
    let inputTarefa = document.getElementById('taskInput');

    botaoAdicionar.addEventListener('click', function () {
        // Corrigido: agora pega o valor corretamente
        let textoTarefa = inputTarefa.value.trim();

        // Corrigido: usa .checked para verificar se está marcado
        let prioridadeBaixa = document.getElementById('listaBaixa').checked;
        let prioridadeMedia = document.getElementById('listaMedia').checked;
        let prioridadeAlta = document.getElementById('listaAlta').checked;

        // Verifica se o campo está vazio
        if (textoTarefa === "") {
            alert("Digite uma tarefa antes de adicionar!");
            return;
        }

        // Verifica se alguma prioridade foi escolhida
        if (!prioridadeBaixa && !prioridadeMedia && !prioridadeAlta) {
            alert("Escolha uma prioridade!");
            return;
        }

        // Cria o container da tarefa
        let novaTarefa = document.createElement('div');
        novaTarefa.classList.add('tarefa');
        novaTarefa.style.fontSize= '20px';
        novaTarefa.style.padding='10px';
        novaTarefa.style.backgroundColor='#fff';
        novaTarefa.style.borderRadius='15px';
        // Cria o texto da tarefa
        let texto = document.createElement('span');
        texto.textContent = textoTarefa;

        // Cria o botão de remover
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'x';
        botaoRemover.classList.add('botao-remover');
        botaoRemover.style.border='none';
        botaoRemover.style.marginLeft='20px';
        botaoRemover.style.cursor='pointer';
        botaoRemover.innerHTML = '<i class="fas fa-trash"></i>';
        // Adiciona o comportamento de clique para remover a tarefa
        botaoRemover.addEventListener('click', function () {
            novaTarefa.remove();
        });

        // Junta texto e botão dentro da tarefa
        novaTarefa.appendChild(texto);
        novaTarefa.appendChild(botaoRemover);

        // Coloca na coluna certa
        if (prioridadeBaixa) {
            document.getElementById('div-baixa').appendChild(novaTarefa);
        } else if (prioridadeMedia) {
            document.getElementById('div-media').appendChild(novaTarefa);
        } else if (prioridadeAlta) {
            document.getElementById('div-alta').appendChild(novaTarefa);
        }

        // Limpa o campo de texto
        inputTarefa.value = "";
    });
});