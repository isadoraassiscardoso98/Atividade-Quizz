function verificarRespostas() {
    let pontuacao = 0;

    let correta1 = document.getElementById("q1_a");
    let correta2 = document.getElementById("q2_c");
    let correta3 = document.getElementById("q3_b");
    let correta4 = document.getElementById("q4_c");
    let correta5 = document.getElementById("q5_a");

    if (correta1.checked === true) {
        pontuacao = pontuacao + 1;
    }
    
    if (correta2.checked === true) {
        pontuacao = pontuacao + 1;
    }
    
    if (correta3.checked === true) {
        pontuacao = pontuacao + 1;
    }
    
    if (correta4.checked === true) {
        pontuacao = pontuacao + 1;
    }
    
    if (correta5.checked === true) {
        pontuacao = pontuacao + 1;
    }

    let mensagem = "Você acertou " + pontuacao + " perguntas!";

    let mensagemExtra = "";
    
    if (pontuacao === 5) {
        mensagemExtra = " Excelente!";
    } else if (pontuacao === 3 || pontuacao === 4) {
        mensagemExtra = " Muito bom!";
    } else if (pontuacao < 3) {
        mensagemExtra = " Continue praticando!";
    }

    // resultado na tela
    let areaResultado = document.getElementById("resultado");
    areaResultado.innerText = mensagem + mensagemExtra;
}