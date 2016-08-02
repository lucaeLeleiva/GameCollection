var numeroDeTurno = 0;
var juego = document.getElementById("juego");
var botones = juego.getElementsByClassName("btnTTT");
function turno(boton){
    var jugador="X";
    /*if(numeroDeTurno%2==0){
        jugador="X";
    }else{
        jugador="O";
    }*/
    boton.value=jugador;
    numeroDeTurno++;
    boton.disabled=true;
    if(verificarGanador()){
        alert("Gano el jugador.");
    }else if(numeroDeTurno<9){
        ia();
        if(verificarGanador()){
            alert("Gano la maquina.");
        }
    }else{
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
function ia(){
    numeroDeTurno++;
    var botonAElegir;
    if(botones[0].value==botones[1].value&&botones[0].value=="O"&&botones[2].value==" "){
        botonAElegir=botones[2];
    }else if(botones[0].value==botones[2].value&&botones[0].value=="O"&&botones[1].value==" "){
        botonAElegir=botones[1];
    }else if(botones[1].value==botones[2].value&&botones[1].value=="O"&&botones[0].value==" "){
        botonAElegir=botones[0];
    }else if(botones[3].value==botones[4].value&&botones[3].value=="O"&&botones[5].value==" "){
        botonAElegir=botones[5];
    }else if(botones[4].value==botones[5].value&&botones[4].value=="O"&&botones[3].value==" "){
        botonAElegir=botones[3];
    }else if(botones[3].value==botones[5].value&&botones[3].value=="O"&&botones[4].value==" "){
        botonAElegir=botones[4];
    }else if(botones[6].value==botones[7].value&&botones[6].value=="O"&&botones[8].value==" "){
        botonAElegir=botones[8];
    }else if(botones[7].value==botones[8].value&&botones[7].value=="O"&&botones[6].value==" "){
        botonAElegir=botones[6];
    }else if(botones[6].value==botones[8].value&&botones[6].value=="O"&&botones[7].value==" "){
        botonAElegir=botones[7];
    }else if(botones[0].value==botones[3].value&&botones[0].value=="O"&&botones[6].value==" "){
        botonAElegir=botones[6];
    }else if(botones[0].value==botones[6].value&&botones[0].value=="O"&&botones[3].value==" "){
        botonAElegir=botones[3];
    }else if(botones[3].value==botones[6].value&&botones[3].value=="O"&&botones[0].value==" "){
        botonAElegir=botones[0];
    }else if(botones[1].value==botones[4].value&&botones[1].value=="O"&&botones[7].value==" "){
        botonAElegir=botones[7];
    }else if(botones[1].value==botones[7].value&&botones[1].value=="O"&&botones[4].value==" "){
        botonAElegir=botones[4];
    }else if(botones[7].value==botones[4].value&&botones[7].value=="O"&&botones[1].value==" "){
        botonAElegir=botones[1];
    }else if(botones[2].value==botones[5].value&&botones[2].value=="O"&&botones[8].value==" "){
        botonAElegir=botones[8];
    }else if(botones[2].value==botones[8].value&&botones[2].value=="O"&&botones[5].value==" "){
        botonAElegir=botones[5];
    }else if(botones[8].value==botones[5].value&&botones[8].value=="O"&&botones[2].value==" "){
        botonAElegir=botones[2];
    }else if(botones[4].value==botones[8].value&&botones[4].value=="O"&&botones[0].value==" "){
        botonAElegir=botones[0];
    }else if(botones[0].value==botones[4].value&&botones[0].value=="O"&&botones[8].value==" "){
        botonAElegir=botones[8];
    }else if(botones[8].value==botones[0].value&&botones[8].value=="O"&&botones[4].value==" "){
        botonAElegir=botones[4];
    }else if(botones[2].value==botones[4].value&&botones[2].value=="O"&&botones[6].value==" "){
        botonAElegir=botones[6];
    }else if(botones[4].value==botones[6].value&&botones[4].value=="O"&&botones[2].value==" "){
        botonAElegir=botones[2];
    }else if(botones[6].value==botones[2].value&&botones[6].value=="O"&&botones[4].value==" "){
        botonAElegir=botones[4];
    }
    if(botonAElegir==null){
        if(botones[0].value==botones[1].value&&botones[0].value=="X"&&botones[2].value==" "){
            botonAElegir=botones[2];
        }else if(botones[0].value==botones[2].value&&botones[0].value=="X"&&botones[1].value==" "){
            botonAElegir=botones[1];
        }else if(botones[1].value==botones[2].value&&botones[1].value=="X"&&botones[0].value==" "){
            botonAElegir=botones[0];
        }else if(botones[3].value==botones[4].value&&botones[3].value=="X"&&botones[5].value==" "){
            botonAElegir=botones[5];
        }else if(botones[4].value==botones[5].value&&botones[4].value=="X"&&botones[3].value==" "){
            botonAElegir=botones[3];
        }else if(botones[3].value==botones[5].value&&botones[3].value=="X"&&botones[4].value==" "){
            botonAElegir=botones[4];
        }else if(botones[6].value==botones[7].value&&botones[6].value=="X"&&botones[8].value==" "){
            botonAElegir=botones[8];
        }else if(botones[7].value==botones[8].value&&botones[7].value=="X"&&botones[6].value==" "){
            botonAElegir=botones[6];
        }else if(botones[6].value==botones[8].value&&botones[6].value=="X"&&botones[7].value==" "){
            botonAElegir=botones[7];
        }else if(botones[0].value==botones[3].value&&botones[0].value=="X"&&botones[6].value==" "){
            botonAElegir=botones[6];
        }else if(botones[0].value==botones[6].value&&botones[0].value=="X"&&botones[3].value==" "){
            botonAElegir=botones[3];
        }else if(botones[3].value==botones[6].value&&botones[3].value=="X"&&botones[0].value==" "){
            botonAElegir=botones[0];
        }else if(botones[1].value==botones[4].value&&botones[1].value=="X"&&botones[7].value==" "){
            botonAElegir=botones[7];
        }else if(botones[1].value==botones[7].value&&botones[1].value=="X"&&botones[4].value==" "){
            botonAElegir=botones[4];
        }else if(botones[7].value==botones[4].value&&botones[7].value=="X"&&botones[1].value==" "){
            botonAElegir=botones[1];
        }else if(botones[2].value==botones[5].value&&botones[2].value=="X"&&botones[8].value==" "){
            botonAElegir=botones[8];
        }else if(botones[2].value==botones[8].value&&botones[2].value=="X"&&botones[5].value==" "){
            botonAElegir=botones[5];
        }else if(botones[8].value==botones[5].value&&botones[8].value=="X"&&botones[2].value==" "){
            botonAElegir=botones[2];
        }else if(botones[4].value==botones[8].value&&botones[4].value=="X"&&botones[0].value==" "){
            botonAElegir=botones[0];
        }else if(botones[0].value==botones[4].value&&botones[0].value=="X"&&botones[8].value==" "){
            botonAElegir=botones[8];
        }else if(botones[8].value==botones[0].value&&botones[8].value=="X"&&botones[4].value==" "){
            botonAElegir=botones[4];
        }else if(botones[2].value==botones[4].value&&botones[2].value=="X"&&botones[6].value==" "){
            botonAElegir=botones[6];
        }else if(botones[4].value==botones[6].value&&botones[4].value=="X"&&botones[2].value==" "){
            botonAElegir=botones[2];
        }else if(botones[6].value==botones[2].value&&botones[6].value=="X"&&botones[4].value==" "){
            botonAElegir=botones[4];
        } 
    }
    while(botonAElegir==null||botonAElegir.value=="X"||botonAElegir.value=="O"){
        var numeroDeBoton=Math.floor(Math.random()*(9 - 0));
        botonAElegir=botones[numeroDeBoton];
    }
    botonAElegir.value="O";
    botonAElegir.disabled=true;
}
