function calcularConta() {
    var numClientes = prompt("Número de Clientes:");
    var valorConta = prompt("Valor Total da Conta:");

    if (numClientes && valorConta) {
        var valorPorCliente = valorConta / numClientes;
        alert("Cada cliente deve pagar: R$ " + valorPorCliente.toFixed(2));
    } else {
        alert("preencha todos os campos.");
    }
}