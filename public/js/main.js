let palavras = $('.frase');
let tot_palavras = palavras.text().split(" ").length;

$('#total-palavras').text(tot_palavras);


$('.campo-digitacao').on("input", ()=>{
    
    let campo =  $('.campo-digitacao').val();
    let campo_sem_espaco = campo.replace(/\s+/g,'');
    

    let total_caracters = campo_sem_espaco.length;
    $('#contador-caracteres').text(total_caracters);

    let qtde_palavras = $('.campo-digitacao').val().split(/\S+/).length -1;
    $('#contador-palavras').text(qtde_palavras);

});

let tempo = $("#tempo").text();

$('.campo-digitacao').one("focus", function(){
    let cronometroID = setInterval(()=>{
        tempo--;
        $("#tempo").text(tempo);

        if(tempo == 0){
            $('.campo-digitacao').attr("disabled",true);
            clearInterval(cronometroID);
        }
    },1000);

});