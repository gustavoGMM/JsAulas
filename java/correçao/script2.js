var bntTema = $('#trocaTema');

btnTema.on('click', function(){
    if(btnTema.hasClass('temaClaro')){
    //    btnTema.classList.replace('temaClaro','temaEscuro);
      
        btnTema.removeClass('temaClaro');
        bntTema.addClass('temaEscuro');
        bntTema.text("TEMA CLARO");
   
        btnTema.removeClass('temaClaro');
        bntTema.addClass('temaEscuro');
    }else{
        btnTema.removeClass('temaClaro');
        bntTema.addClass('temaEscuro'); 
        bntTema.text("TEMA ESCURO");

        btnTema.removeClass('temaClaro');
        bntTema.addClass('temaEscuro'); 
    }
});