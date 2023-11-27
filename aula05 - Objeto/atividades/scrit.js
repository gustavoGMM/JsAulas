let carro = {
    marca: "fiat",
    modelo: "UNO",
    ano: 2022,
    cor: "Prata",
    velocidadeMaxima: 300,
    velocidadeAtual: 0,
  
    acelerar: function(velocidade) {
      if (this.velocidadeAtual + velocidade <= this.velocidadeMaxima) {
        this.velocidadeAtual += velocidade;
        console.log(`Acelerando. Nova velocidade: ${this.velocidadeAtual} km/h`);
      } else {
        console.log(`Não é possível ir além de ${this.velocidadeMaxima} km/h`);
      }
    }
  };
  
  console.log(`Marca: ${carro.marca}`);
  console.log(`Modelo: ${carro.modelo}`);
  console.log(`Ano: ${carro.ano}`);
  console.log(`Cor: ${carro.cor}`);
  console.log(`Velocidade Máxima: ${carro.velocidadeMaxima} km/h`);
  console.log(`Velocidade Atual: ${carro.velocidadeAtual} km/h`);
  
  carro.acelerar(50);
  carro.acelerar(180);
  carro.acelerar(20);