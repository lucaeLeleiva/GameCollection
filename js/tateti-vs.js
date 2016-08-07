window.onload=function(){
    //Obtengo botones de juego.
    var juego = document.getElementById("juego");
    var botones = juego.getElementsByTagName("input");
    //Asigno funcionalidad a boton de reinicio.
    document.getElementById("r").onclick=reiniciar;
    //Asigno funcionalidad a botones de juego.
    for (var i = 0; i<botones.length; i++) {
        botones[i].onclick=turno;
    }
    //Variable auxiliar de turno.
    var numeroDeTurno = 0;
    //Se ejecutara cada vez que se haga click en un boton (Marca turnos y llama a la funcion para verificar ganador).
    function turno(){
        var jugador;
        if(numeroDeTurno%2==0){
            jugador="X";
        }else{
            jugador="O";
        }
        this.value=jugador;
        numeroDeTurno++;
        this.disabled=true;
        if(verificarGanador()){
            alert("Gano el jugador: "+jugador);
        }else if(numeroDeTurno==9){
            alert("Se ha empatado");
        }
    }
    //Reinicia el juego.
    function reiniciar(){
        numeroDeTurno=0;
        for (var i = 0; i<botones.length; i++) {
            botones[i].disabled=false;
            botones[i].value=" ";
        }
    }
    //Verifica si alguna de las condiciones de victoria se cumple, de ser asi devuelve true.
    function verificarGanador(){
        var gano=false;
        if(botones[0].value==botones[1].value&&botones[1].value==botones[2].value&&botones[0].value!=" "){
            gano=true;
        }else if(botones[0].value==botones[3].value&&botones[3].value==botones[6].value&&botones[0].value!=" "){
            gano=true;
        }else if(botones[0].value==botones[4].value&&botones[4].value==botones[8].value&&botones[0].value!=" "){
            gano=true;
        }else if(botones[3].value==botones[4].value&&botones[4].value==botones[5].value&&botones[3].value!=" "){
            gano=true;
        }else if(botones[6].value==botones[7].value&&botones[7].value==botones[8].value&&botones[6].value!=" "){
            gano=true;
        }else if(botones[2].value==botones[5].value&&botones[5].value==botones[8].value&&botones[2].value!=" "){
            gano=true;
        }else if(botones[2].value==botones[4].value&&botones[4].value==botones[6].value&&botones[2].value!=" "){
            gano=true;
        }else if(botones[1].value==botones[4].value&&botones[4].value==botones[7].value&&botones[1].value!=" "){
            gano=true;
        }
        if(gano==true){
            for (var i =0; i<botones.length;i++ ) {
                botones[i].disabled=true;
            }
        }
        return gano;
    }
};