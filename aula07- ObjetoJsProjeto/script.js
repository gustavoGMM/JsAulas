function salvarFilme() {
    var nome = document.getElementById('nome').value;
    var descricao = document.getElementById('descricao').value;
    var data = document.getElementById('data').value;
    var diretor = document.getElementById('diretor').value;
    var categoria = document.getElementById('categoria').value;

    var filme = {
      nome: nome,
      descricao: descricao,
      data: data,
      diretor: diretor,
      categoria: categoria
    };

    adicionarFilmeNaLista(filme);
    limparFormulario();
  }

  function adicionarFilmeNaLista(filme) {
    var listaFilmes = document.getElementById('listaFilmes');
    var itemLista = document.createElement('li');
    itemLista.innerHTML = '<strong>' + filme.nome + '</strong> (' + filme.data + ') - ' + filme.diretor + ' - ' + filme.categoria + '<br>' + filme.descricao;
    listaFilmes.appendChild(itemLista);
  }

  function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('diretor').value = '';
    document.getElementById('categoria').value = '';
  }