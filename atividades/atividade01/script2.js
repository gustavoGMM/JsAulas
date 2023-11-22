function mostrarSucessorAntecessor() {
    var numeroDigitado = prompt("Digite um Número:");

    if (numeroDigitado !== null && numeroDigitado !== "") {
        var antecessor = parseInt(numeroDigitado) - 1;
        var sucessor = parseInt(numeroDigitado) + 1;

        var resultado = `Antecessor: ${antecessor}, Número Digitado: ${numeroDigitado}, Sucessor: ${sucessor}`;
        console.log(resultado);
    } else {
        console.log("Por favor, digite um número.");
    }
}

mostrarSucessorAntecessor();