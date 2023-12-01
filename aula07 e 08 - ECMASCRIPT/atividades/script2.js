function substituir() {
    const texto = document.getElementById('texto').value;
    const palavraAntiga = prompt('Digite a palavra antiga:');
    const palavraNova = prompt('Digite a palavra nova:');

    const novoTexto = texto.replace(palavraAntiga, palavraNova);
    document.getElementById('texto').value = novoTexto;
}

function substituirTudo() {
    const texto = document.getElementById('texto').value;
    const palavraAntiga = prompt('Digite a palavra antiga:');
    const palavraNova = prompt('Digite a palavra nova:');

    const regex = new RegExp(palavraAntiga, 'g');
    const novoTexto = texto.replace(regex, palavraNova);
    document.getElementById('texto').value = novoTexto;
}