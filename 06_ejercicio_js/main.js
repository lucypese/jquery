$("#cerrar") .on("click", function(){
    $("#banner").hide();
});

$("img") .on("click", function(){
    $(this).replaceWith("<div class='texto'>Agregado al carro</div>");
});