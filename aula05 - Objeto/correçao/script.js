class Carro {
      constructor(marca, modelo, ano, cor, velicidadeMax,){
          this.marca = marca;
          this.modelo = modelo;
          this.ano = ano;
          this.cor = cor;
          this.velicidadeMax = velicidadeMax;
          this.velicidadeMax = 0;

    }
    acelerar(velicidadeAcelerada){
        if(velicidadeAcelerada <= 0){
           return "velocidade nao permitida! coloque um aceleraçao acima de 0";
        }else{
           if(velicidadeAcelerada + this.velicidadeAtual > this.velicidadeMax){
               return "velocidade nao permitida! velocidade maxima ultrapassada!";
           }else{
               this.velicidadeAtual += velicidadeAcelerada;
               return "voce acelerou "+velicidadeAcelerada; 
           }
        //velocidade atual + valor
    }
 }

}

var  btnCarro = document.querySelector("#btnCarro");

btnCarro.addEventListener('click' , criarCarro);

function criarCarro(){
   let marca = document.querySelector("#marca").value;
   let modelo = document.querySelector("#modelo").value;
   let data = document.querySelector("#data").value;
   let cor = document.querySelector("#cor").value;
   let velicidadeMax = document.querySelector("#velocidadeMax").value;
}

var uno = new Carro("fiat","Uno mile",1998,"vermelho",190);