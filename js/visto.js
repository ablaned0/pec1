

$(document).ready(function(){
    $("button").click(function(){

        localStorage.setItem( "nombre", $(this).attr("id"));
        for (var i = 0; i < localStorage.length; i++) {
            var clave = localStorage.key(i);
            var valor = localStorage.getItem(clave);
            for(var j=0; j < $("button").length; j++){
                var indice = $("button").eq(j);
                console.log(valor)
                if(valor===indice.attr("id")){
                    indice.html("Visto");
                    indice.css("background-color","green");
                }
            }
        }    
    });

});


//$(this).html("Visto");
//$(this).css("background-color","green");
