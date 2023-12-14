document.addEventListener("DOMContentLoaded", function () {
    var btnCep = document.querySelector("#btncep");

    btnCep.addEventListener("click", consultar);

    function consultar() {
        var cepInput = document.querySelector("#cep");
        var cep = cepInput.value;

        if (cep.length !== 8) {
            alert("Erro! CEP inválido!");
        } else {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Erro na requisição: ${res.status}`);
                    }
                    return res.json();
                })
                .then(dados => exibirInformacoes(dados))
                .catch(error => {
                    console.error(error.message);
                    alert("Erro na requisição. Verifique o console para mais detalhes.");
                });
        }
    }

    function exibirInformacoes(dados) {
        var resposta = document.querySelector("#resposta");
        resposta.innerHTML = `
            <h1>Informações sobre o CEP</h1>
            CEP: ${dados.cep}<br>
            BAIRRO: ${dados.bairro}<br>
            LOGRADOURO: ${dados.logradouro}<br>
            LOCALIDADE: ${dados.localidade}<br>
            UF: ${dados.uf}<br>
            
        `;
    }
});