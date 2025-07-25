document.addEventListener('DOMContentLoaded', function () {
    let botaoAdicionar = document.querySelector('button');
    let inputTarefa = document.getElementById('taskInput');

    botaoAdicionar.addEventListener('click', function () {
        let textoTarefa = inputTarefa.value.trim();

        let prioridadeBaixa = document.getElementById('listaBaixa').checked;
        let prioridadeMedia = document.getElementById('listaMedia').checked;
        let prioridadeAlta = document.getElementById('listaAlta').checked;

        if (textoTarefa === "") {
            alert("Digite uma tarefa antes de adicionar!");
            return;
        }

        if (!prioridadeBaixa && !prioridadeMedia && !prioridadeAlta) {
            alert("Escolha uma prioridade!");
            return;
        }

        let novaTarefa = document.createElement('div');
        novaTarefa.classList.add('tarefa');
        novaTarefa.style.fontSize= '20px';
        novaTarefa.style.height='20px'
        novaTarefa.style.padding='10px';
        novaTarefa.style.backgroundColor='#fff';
        novaTarefa.style.borderRadius='15px';

        let texto = document.createElement('span');
        texto.textContent = textoTarefa;

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'x';
        botaoRemover.classList.add('botao-remover');
        botaoRemover.style.border='none';
        botaoRemover.style.marginLeft='20px';
        botaoRemover.style.cursor='pointer';
        botaoRemover.innerHTML = '<i class="fas fa-trash"></i>';

        botaoRemover.addEventListener('click', function () {
            novaTarefa.remove();
        });

        novaTarefa.appendChild(texto);
        novaTarefa.appendChild(botaoRemover);

        if (prioridadeBaixa) {
            document.getElementById('div-baixa').appendChild(novaTarefa);
        } else if (prioridadeMedia) {
            document.getElementById('div-media').appendChild(novaTarefa);
        } else if (prioridadeAlta) {
            document.getElementById('div-alta').appendChild(novaTarefa);
        }

        inputTarefa.value = "";
    });
});