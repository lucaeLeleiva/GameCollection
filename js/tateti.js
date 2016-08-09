window.onload=function(){
    selectorDeTipoDeJuego();
};
//Variable auxiliar de turno.
var numeroDeTurno = 0;
//Se ejecutara cada vez que se haga click en un boton.(Marca turnos y hace jugar a la maquina.)
function turnoIa(){
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
function turnoVs(){
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
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
    numeroDeTurno=0;
    for (var i = 0; i<botones.length; i++) {
        botones[i].disabled=false;
        botones[i].value=" ";
    }
}
//Verifica todas las posibilidades de victoria y si alguna se cumple devuelve true
function verificarGanador(){
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
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
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
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
function selectorDeTipoDeJuego(){
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
    var botonDeReinicio=document.getElementById("r");
    botonDeReinicio.onclick=reiniciar;
    botonDeReinicio.style.display="none";
    var fila1=document.createElement("div");
    var fila2=document.createElement("div");
    fila1.setAttribute("class","row");
    fila2.setAttribute("class","row");
    var tatetivs=document.createElement("input");
    var tatetiia=document.createElement("input");
    tatetivs.value="Jugar contra persona.";
    tatetiia.value="Jugar contra contra la maquina.";
    tatetivs.textContent="Jugar contra persona.";
    tatetiia.textContent="Jugar contra contra la maquina.";
    tatetivs.onclick=dibujarTablero;
    tatetiia.onclick=dibujarTablero;
    tatetivs.setAttribute("id","botonVS");
    tatetiia.setAttribute("id","botonIA");
    tatetivs.setAttribute("class","btn btn-primary btn-lg btn-block");
    tatetiia.setAttribute("class","btn btn-primary btn-lg btn-block");
    fila1.appendChild(tatetivs);
    fila2.appendChild(tatetiia);
    document.getElementById("selectorDeTipoDeJuego").appendChild(fila1);
    document.getElementById("selectorDeTipoDeJuego").appendChild(fila2);
}
function dibujarTablero(){
    document.getElementById("r").style.display="initial";
    document.getElementById("botonIA").style.display="none";
    document.getElementById("botonVS").style.display="none";
    var tablero=document.getElementById("tablerotateti");
    for(var i=0; i<3;i++){
        var fila=document.createElement("div");
        fila.setAttribute("class","fila");
        for(var j=0;j<3;j++){
            var contenedor=document.createElement("div");
            contenedor.setAttribute("class","casilleroTaTeTi");
            var boton=document.createElement("input");
            if(this.value=="Jugar contra persona."){
                boton.onclick=turnoVs;    
            }else{
                boton.onclick=turnoIa;
            }
            boton.setAttribute("class","botonTateti");
            boton.setAttribute("id",i+"-"+j);
            boton.setAttribute("type","button");
            boton.setAttribute("value"," ");
            contenedor.appendChild(boton);
            fila.appendChild(contenedor);
        }
        tablero.appendChild(fila);
    }
}