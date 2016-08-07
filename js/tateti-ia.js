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
    //Se ejecutara cada vez que se haga click en un boton.(Marca turnos y hace jugar a la maquina.)
    function turno(){
        var jugador="X";
        this.value=jugador;
        numeroDeTurno++;
        this.disabled=true;
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
    //Reinicia el juego.
    function reiniciar(){
        numeroDeTurno=0;
        for (var i = 0; i<botones.length; i++) {
            botones[i].disabled=false;
            botones[i].value=" ";
        }
    }
    //Verifica todas las posibilidades de victoria y si alguna se cumple devuelve true
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
    //Elije un boton, lo desabilita y le asigna O para la maquina.
    function ia(){
        numeroDeTurno++;
        var botonAElegir;
        //Primero trata de ganar.
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
        //Si no encontro un boton que le consiga la victoria busca evitar que el jugador gane.
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
        //Si no se cumple ninguno de los otros casos elige un boton random.
        while(botonAElegir==null||botonAElegir.value=="X"||botonAElegir.value=="O"){
            var numeroDeBoton=Math.floor(Math.random()*(9 - 0));
            botonAElegir=botones[numeroDeBoton];
        }
        //Deshabilita y se asigna un boton.
        botonAElegir.value="O";
        botonAElegir.disabled=true;
    }
};