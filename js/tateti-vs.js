var numeroDeTurno = 0;
var juego = document.getElementById("juego");
var botones = juego.getElementsByClassName("btn btn-primary btn-lg btn-block");
function turno(boton){
    var jugador;
    if(numeroDeTurno%2==0){
        jugador="X";
    }else{
        jugador="O";
    }
    boton.value=jugador;
    numeroDeTurno++;
    boton.disabled=true;
    if(verificarGanador()){
        alert("Gano el jugador: "+jugador);
    }else if(numeroDeTurno=9){
        alert("Se ha empatado");
    }
}
function reiniciar(){
    numeroDeTurno=0;
    for (var i = 0; i<botones.length; i++) {
        botones[i].disabled=false;
        botones[i].value=" ";
    }
}
function verificarGanador(){
    var gano=false;
    var ganador;
    if(botones[0].value==botones[1].value&&botones[1].value==botones[2].value&&botones[0].value!=" "){
        gano=true;
        ganador=botones[0].value;
    }else if(botones[0].value==botones[3].value&&botones[3].value==botones[6].value&&botones[0].value!=" "){
        gano=true;
        ganador=botones[0].value;
    }else if(botones[0].value==botones[4].value&&botones[4].value==botones[8].value&&botones[0].value!=" "){
        gano=true;
        ganador=botones[0].value;
    }else if(botones[3].value==botones[4].value&&botones[4].value==botones[5].value&&botones[3].value!=" "){
        gano=true;
        ganador=botones[3].value;
    }else if(botones[6].value==botones[7].value&&botones[7].value==botones[8].value&&botones[6].value!=" "){
        gano=true;
        ganador=botones[6].value;
    }else if(botones[2].value==botones[5].value&&botones[5].value==botones[8].value&&botones[2].value!=" "){
        gano=true;
        ganador=botones[2].value;
    }else if(botones[2].value==botones[4].value&&botones[4].value==botones[6].value&&botones[2].value!=" "){
        gano=true;
        ganador=botones[2].value;
    }else if(botones[1].value==botones[4].value&&botones[4].value==botones[7].value&&botones[1].value!=" "){
        gano=true;
        ganador=botones[1].value;
    }
    if(gano==true){
        for (var i =0; i<botones.length;i++ ) {
            botones[i].disabled=true;
        }
    }
    return gano;
}
