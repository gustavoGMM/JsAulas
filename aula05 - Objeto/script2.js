class Aluno{
    constructor(valorNome,valorIdade,valorTurma){
        this.nome = valorNome;
        this.idade = valorIdade;
        this.turma = valorTurma;
    }
   
}

class Curso{
    constructor(valorNome,valorDuraçao,ValorTipo){
        this.nome = valorNome;
        this.duraçao = valorDuraçao;
        this.turma = ValorTipo;
    }
   
}
var curso1 = new Curso("FRONT",220,"Tecnologia");
var curso2 = new Curso("Java",400,"Tecnologia");

var aluno1 = new Aluno("Leandro", 25, curso1);
var aluno2 = new Aluno("Alice", 20, curso2);

