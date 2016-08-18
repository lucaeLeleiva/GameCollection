//Variable auxiliar de turno.
var numeroDeTurno = 0;
var ganadosJugador1=0;
var ganadosJugador2=0;
//Actualiza el contenido del marcador a los valores actuales de ganadosJugador1/2
function actualizarMarcador(){
    var marcador=document.getElementById("marcador");
    marcador.innerHTML=ganadosJugador1+"-"+ganadosJugador2;
}
//Elije un boton, lo desabilita y le asigna O para la maquina.
//Prioriza en orden, ganar, no dejar ganar, aleatorio.
function ia(){
    numeroDeTurno++;
    var botonAElegir;
    function verificarTablero(valor){
        var botonAElegir;
        var tablero = document.getElementById("tablerotateti");
        var botones = tablero.getElementsByTagName("input");
        if(botones[0].value===botones[1].value&&botones[0].value===valor&&botones[2].value===" "){
            botonAElegir=botones[2];
        }else if(botones[0].value===botones[2].value&&botones[0].value===valor&&botones[1].value===" "){
            botonAElegir=botones[1];
        }else if(botones[1].value===botones[2].value&&botones[1].value===valor&&botones[0].value===" "){
            botonAElegir=botones[0];
        }else if(botones[3].value===botones[4].value&&botones[3].value===valor&&botones[5].value===" "){
            botonAElegir=botones[5];
        }else if(botones[4].value===botones[5].value&&botones[4].value===valor&&botones[3].value===" "){
            botonAElegir=botones[3];
        }else if(botones[3].value===botones[5].value&&botones[3].value===valor&&botones[4].value===" "){
            botonAElegir=botones[4];
        }else if(botones[6].value===botones[7].value&&botones[6].value===valor&&botones[8].value===" "){
            botonAElegir=botones[8];
        }else if(botones[7].value===botones[8].value&&botones[7].value===valor&&botones[6].value===" "){
            botonAElegir=botones[6];
        }else if(botones[6].value===botones[8].value&&botones[6].value===valor&&botones[7].value===" "){
            botonAElegir=botones[7];
        }else if(botones[0].value===botones[3].value&&botones[0].value===valor&&botones[6].value===" "){
            botonAElegir=botones[6];
        }else if(botones[0].value===botones[6].value&&botones[0].value===valor&&botones[3].value===" "){
            botonAElegir=botones[3];
        }else if(botones[3].value===botones[6].value&&botones[3].value===valor&&botones[0].value===" "){
            botonAElegir=botones[0];
        }else if(botones[1].value===botones[4].value&&botones[1].value===valor&&botones[7].value===" "){
            botonAElegir=botones[7];
        }else if(botones[1].value===botones[7].value&&botones[1].value===valor&&botones[4].value===" "){
            botonAElegir=botones[4];
        }else if(botones[7].value===botones[4].value&&botones[7].value===valor&&botones[1].value===" "){
            botonAElegir=botones[1];
        }else if(botones[2].value===botones[5].value&&botones[2].value===valor&&botones[8].value===" "){
            botonAElegir=botones[8];
        }else if(botones[2].value===botones[8].value&&botones[2].value===valor&&botones[5].value===" "){
            botonAElegir=botones[5];
        }else if(botones[8].value===botones[5].value&&botones[8].value===valor&&botones[2].value===" "){
            botonAElegir=botones[2];
        }else if(botones[4].value===botones[8].value&&botones[4].value===valor&&botones[0].value===" "){
            botonAElegir=botones[0];
        }else if(botones[0].value===botones[4].value&&botones[0].value===valor&&botones[8].value===" "){
            botonAElegir=botones[8];
        }else if(botones[8].value===botones[0].value&&botones[8].value===valor&&botones[4].value===" "){
            botonAElegir=botones[4];
        }else if(botones[2].value===botones[4].value&&botones[2].value===valor&&botones[6].value===" "){
            botonAElegir=botones[6];
        }else if(botones[4].value===botones[6].value&&botones[4].value===valor&&botones[2].value===" "){
            botonAElegir=botones[2];
        }else if(botones[6].value===botones[2].value&&botones[6].value===valor&&botones[4].value===" "){
            botonAElegir=botones[4];
        }
        return botonAElegir;
    }
    //Primero trata de ganar.
    botonAElegir=verificarTablero("O");
    //Si no encontro un boton que le consiga la victoria busca evitar que el jugador gane.
    if(botonAElegir==null){
        botonAElegir=verificarTablero("X");
    }
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
    //Si no se cumple ninguno de los otros casos elige un boton random.
    while(botonAElegir==null||botonAElegir.value==="X"||botonAElegir.value==="O"){
        var numeroDeBoton=Math.floor(Math.random()*(9 - 0));
        botonAElegir=botones[numeroDeBoton];
    }
    //Deshabilita y se asigna un boton.
    botonAElegir.value="O";
    botonAElegir.disabled=true;
}
//Verifica todas las posibilidades de victoria y si alguna se cumple devuelve true
function verificarGanador(){
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
    var gano=false;
    if(botones[0].value===botones[1].value&&botones[1].value===botones[2].value&&botones[0].value!==" "){
        gano=true;
    }else if(botones[0].value===botones[3].value&&botones[3].value===botones[6].value&&botones[0].value!==" "){
        gano=true;
    }else if(botones[0].value===botones[4].value&&botones[4].value===botones[8].value&&botones[0].value!==" "){
        gano=true;
    }else if(botones[3].value===botones[4].value&&botones[4].value===botones[5].value&&botones[3].value!==" "){
        gano=true;
    }else if(botones[6].value===botones[7].value&&botones[7].value===botones[8].value&&botones[6].value!==" "){
        gano=true;
    }else if(botones[2].value===botones[5].value&&botones[5].value===botones[8].value&&botones[2].value!==" "){
        gano=true;
    }else if(botones[2].value===botones[4].value&&botones[4].value===botones[6].value&&botones[2].value!==" "){
        gano=true;
    }else if(botones[1].value===botones[4].value&&botones[4].value===botones[7].value&&botones[1].value!==" "){
        gano=true;
    }
    if(gano===true){
        for (var i =0; i<botones.length;i++ ) {
            botones[i].disabled=true;
        }
    }
    return gano;
}
//Comprueba si todos los botones estan deshabilitados y de ser asi devuelve true.
function todosDeshabilitados(){
    var deshabilitado=true;
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
    var numeroDeBoton=0;
    while(numeroDeBoton<botones.length&&deshabilitado){
        if(botones[numeroDeBoton].disabled===false){
            deshabilitado=false;
        }
        numeroDeBoton++;
    }
    return deshabilitado;
}
//Se ejecutara cada vez que se haga click en un boton(Marca turnos y hace jugar a la maquina si fuera el caso).
function turnoVs(){
    var jugador;
    if(numeroDeTurno%2===0){
        jugador="X";
        this.value=jugador;
        numeroDeTurno++;
        this.disabled=true;
        if(verificarGanador()){
            ganadosJugador1++;
            actualizarMarcador();
            alert("Gano el jugador X");
        }
    }else if(numeroDeTurno%2!==0){
        jugador="O";
        this.value=jugador;
        numeroDeTurno++;
        this.disabled=true;
        if(verificarGanador()){
            ganadosJugador2++;
            actualizarMarcador();
            alert("Gano el jugador O");
        }
    }else if(todosDeshabilitados()){
        alert("Se ha empatado");
    }
}
function turnoIa(){
    var jugador="X";
    if(numeroDeTurno%2===0){
        this.value=jugador;
        numeroDeTurno++;
        this.disabled=true;
        if(verificarGanador()){
            ganadosJugador1++;
            actualizarMarcador();
            alert("Gano el jugador.");
        }
    }
    if(numeroDeTurno%2!==0 && !todosDeshabilitados()){
        ia();
        if(verificarGanador()){
            ganadosJugador2++;
            actualizarMarcador();
            alert("Gano la maquina.");
        }
    }
    if(!verificarGanador()&&todosDeshabilitados()){
        alert("Se ha empatado");
    }
}
//Reinicia el juego, habilita los botones y los deja vacios.
function reiniciar(){
    var tablero = document.getElementById("tablerotateti");
    var botones = tablero.getElementsByTagName("input");
    for (var i = 0; i<botones.length; i++) {
        botones[i].disabled=false;
        botones[i].value=" ";
    }
    if(botones[0].onclick===turnoIa&&numeroDeTurno%2!==0){
        ia();
        numeroDeTurno=0;
    }
}
//Oculta el selector de dificultad y crea los botones que conforman el tablero, tambien revela el boton de inicio y el de volver al selector.
function dibujarTablero(){
    document.getElementById("marcador").style.display="initial";
    document.getElementById("r").style.display="initial";
    document.getElementById("v").style.display="initial";
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
            if(this.value==="Jugar contra persona."){
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
//Oculta los botones de volver al selector y de reinicio y crea los botones para elegir el modo de juego.
function selectorDeTipoDeJuego(){
    document.getElementById("marcador").style.display="none";
    document.getElementById("v").style.display="none";
    document.getElementById("r").style.display="none";
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
//Borra el tablero y el menu de selector, y llama al creador del menu otra vez.
function volver(){
    ganadosJugador1=0;
    ganadosJugador2=0;
    actualizarMarcador();
    numeroDeTurno=0;
    var juego=document.getElementById("tablerotateti");
    while(juego.firstChild){
        juego.removeChild(juego.firstChild);
    }
    var selector=document.getElementById("selectorDeTipoDeJuego");
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
    selectorDeTipoDeJuego();
}
//La app inicia al cargarse la pagina
window.onload=function(){
    //Crea y muestra el selector de tipo de juego y asigna funcionalidad a los botones de reiniciar y volver a mostrar el selector
    selectorDeTipoDeJuego();
    document.getElementById("r").onclick=reiniciar;
    document.getElementById("v").onclick=volver;
};