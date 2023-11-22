const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function identificarFaixaEtaria(idade) {
  if (idade >= 0 && idade < 15) {
    return "Criança";
  } else if (idade >= 15 && idade < 30) {
    return "Jovem";
  } else if (idade >= 30 && idade < 60) {
    return "Adulto";
  } else if (idade >= 60) {
    return "Idoso";
  } else {
    throw new Error("Idade inválida");
  }
}

rl.question("Informe sua idade: ", function(idade) {
  try {
    idade = parseInt(idade);
    const faixaEtaria = identificarFaixaEtaria(idade);
    console.log(`Você é classificado como: ${faixaEtaria}`);
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
});