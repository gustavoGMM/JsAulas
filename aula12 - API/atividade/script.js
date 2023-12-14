function validarCEP() {
    var cep = document.getElementById('cep').value;
    var resultado = document.getElementById('resultado');

    resultado.innerHTML = `O CEP ${cep} é válido.`;

}