//var cliente1Nome = "Leonardo";
//var cliente1Saldo = 0;
//var cliente1Cpf = 99999;
//var cliente1Agencia = "001";
//var cliente1Conta = "25123213";
//var cliente1dataDeNascimento= "25/02/1998";

//var cliente1 =["Nome = Leonardo", "Saldo = 99999"];

class Cliente{
    nome;
    dataDeNascimento;
    cfp;
    conta;
    agencia;
    saldo;
    secar(valor){
       // saldo -= valor;
       // this.atriduto => atributo da class
       if (this.saldo >= valor){
          this.saldo = this.saldo - valor;
          return "valor sacado : R$ "+valor;
     }else{ 
         return "Operaçao nao autorizada! Ta quebrado hein ;-;!";
    }

  };
    depositar(valor){
    if (valor > 0){
        this.saldo = this.saldo + valor;
        return "Valor depositado : R$ "+valor;
   }else{ 
       return "Operaçao nao autorizada! Faça um deposito de pelo menos R$0,01";
   }
  };
consultarSaldo(){
    return "O saldo da conta é de : R$ "+this.saldo;
  }

}

var cliente1 = new Cliente();
cliente1.nome = "Leonardo";
cliente1.dataDeNascimento = "25/02/1998";
cliente1.cfp = 99999;
cliente1.conta = "001";
cliente1.agencia = "x001";
cliente1.saldo = 0;

console.log(cliente1);

var cliente2 = new Cliente();


cliente1.depositar(2000);
cliente1.sacar(200);
cliente1.consultarSaldo();