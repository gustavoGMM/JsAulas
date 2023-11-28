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
   let marcaInput = document.querySelector("#marca").value;
   let modeloInput = document.querySelector("#modelo").value;
   let dataInput = document.querySelector("#data").value;
   let corInput = document.querySelector("#cor").value;
   let velicidadeMaxInput = document.querySelector("#velocidadeMax").value;
   let resposta = document.querySelector("#resposta");


var carro = new Carro(marcaInput,modeloInput,dataInput,corInput,velicidadeMaxInput);

resposta.innerHTML = `<div class="post">
<h3>${carro.modelo}</h3>
<p>Marca : ${carro.marca}</P>
<p>Data : ${carro.ano}</p>
<p>Cor do carro : <span style="color:${carro.cor}">COR</span></p>
<p>velocidade Max : ${carro.velicidadeMax}</p>
</div>`;

}