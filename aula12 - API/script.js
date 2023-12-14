//API = Application Programming Interface
//Fetch = Busca a aplicação
//Json = Maneira de transmitir dados do lado servidor para lado cliente
//Then = Acessamos outro escopo da aplicaçao (pegou api.então......)
var btncep = document.querySelector("#btncep");

btnCep.addEventListener("click", consultar);

function consultar(){
    var cep = document.querySelector("#cep").value;

    const Api = fetch(`https://viacep.com.br/ws/72241116/json/`).then(res => {
    return res.json();
}).then(dados => {
    let resposta = querySelector("#resposta");
    resposta.innerHTML +=  `
    <h1>Informações sobre o cep</h1>
    CEP : ${dados.cep}<br>
    BAIRRO : ${dados.bairro}<br>
    LONGADOURO  : ${dados.longadouro}<br>
    `;


console.log(dados);
});

//console.log(Api);