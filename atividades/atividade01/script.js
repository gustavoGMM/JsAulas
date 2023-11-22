const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularConta() {
  rl.question('Número de Clientes: ', (numClientes) => {
    rl.question('Total da Conta: ', (valorConta) => {
      if (numClientes && valorConta) {
        const valorPorCliente = parseFloat(valorConta) / parseInt(numClientes);
        console.log(`os clientes vao pagar: R$ ${valorPorCliente.toFixed(2)}`);
      } else {
        
      }
      rl.close();
    });
  });
}

calcularConta();