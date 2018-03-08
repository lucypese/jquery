let colores = ["blue", "yellow","red", "grey", "orange", "green", "orange", "purple"];
let color = colores[Math.floor(Math.random() * colores.length)];

$("#anuncio").ready(function() {
    $("#anuncio").text("¡CLICK! Para cambiar el color")
    .hide()
    .fadeIn(3000)
});

$("#anuncio") .on("click", function(){
    $("#anuncio").css("background-color", colores[Math.floor(Math.random() * colores.length)]);
});