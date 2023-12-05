function calcularTabuada() {
    try {
        var numero = parseInt(prompt("Escolha um número de 1 a 10 para a tabuada:"));

        if (numero >= 1 && numero <= 10) {
            for (var i = 1; i <= 10; i++) {
                var resultado = numero * i;
                console.log(`${numero} x ${i} = ${resultado}`);
            }
        } else {
            alert("Por favor, escolha um número entre 1 e 10.");
        }
    } catch (error) {
        alert("Entrada inválida. Por favor, insira um número válido.");
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}