//Variable auxiliar que contiene la fecha de inicio de juego y una variable que contiene el temporizador
var temporizador;
var tiempoInicio;
//Variable auxiliar que se asigna cuando se hayan puesto las minas en el tablero.
var casillerosSinMinas;
//Recibe un boton y devuelve un array con los casilleros continuos al mismo.
function casillerosContinuos(boton){
    var casilleros;
    var id=boton.id;
    var indiceGuion=id.indexOf("-");
    var idNumero1=id.substring(0,(indiceGuion));
    var idNumero2=id.substring((indiceGuion+1));
    var boton1=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
    var boton2=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)-1).toString()));
    var boton3=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
    var boton4=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)).toString()));
    var boton5=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)).toString()));
    var boton6=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
    var boton7=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)+1).toString()));
    var boton8=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
    casilleros=[boton1,boton2,boton3,boton4,boton5,boton6,boton7,boton8];
    return casilleros;
}
//Calcula los segundos entre que es ejecutada y se inicio el cronometro y lo imprime en el div.
function cronometroContinuar(){
    var tiempoActual=new Date();
    var tiempo= tiempoActual - tiempoInicio;
	tiempo = new Date(tiempo);
	var segundos = tiempo.getSeconds();
	var minutos=tiempo.getMinutes();
	segundos+=minutos*60;
    document.getElementById("cronometroDiv").innerHTML=segundos;
    temporizador=setTimeout(cronometroContinuar(),100);
}
//Inicia el cronometro dandole la fecha de inicio a la variable auxiliar y llamando a la funcion que continua el cronometro.
function cronometroIniciar(){
    tiempoInicio=new Date();
    cronometroContinuar();
}
//Termina el juego deshabilitando los casilleros y parando el cronometro.
function terminarJuego(){
    var tablero=document.getElementById("tablero");
    var botones=tablero.getElementsByTagName("input");
    for(var i=0;i<botones.length;i++){
        botones[i].disabled=true;
    }
    clearTimeout(temporizador);
}
//Devuelve un color en hexagecimal segun el numero pasado.
function obtenerColor(numeroDeMinas){
    var colores=["#AFBDFF","#00AD00","#D9D900","#D99100","#D93E00","#AE0062","#5D0091","#531DFF","#96CD00","#D90000"];
    var color=colores[numeroDeMinas];
    return color;
}
//Cuenta la cantidad de minas alrededor de un boton dado y devuelve el numero.
function contarOcultas(boton){
    var cantidadDeMinas=0;
    var botones=casillerosContinuos(boton);
    for(var i=0;i<botones.length;i++){
        if(botones[i]!=null){
            if(botones[i].value==="-1"){
                cantidadDeMinas++;
            }
        }
    }
    return cantidadDeMinas;
}
//Verifica los casilleros a los cuales no se le hizo click.
function verificarSubCasillero(boton){
    boton.disabled=true;
    casillerosSinMinas--;
    if(casillerosSinMinas===0){
        terminarJuego();
        alert("Has Ganado!");
    }
    var minas=contarOcultas(boton);
    if(minas===0){
        var botonesAVerificar=casillerosContinuos(boton);
        for(var i=0;i<botonesAVerificar.length;i++){
            if(botonesAVerificar[i]!==null){
                if(botonesAVerificar[i].disabled===false){
                    verificarSubCasillero(botonesAVerificar[i]);
                }
            }
        }
        boton.style.borderColor=obtenerColor(minas);
        boton.style.background=obtenerColor(minas);
    }else{
        boton.setAttribute("value",minas);
        boton.style.color="white";
        boton.style.borderColor=obtenerColor(minas);
        boton.style.background=obtenerColor(minas);
    }
}
//Se ejecuta la siguiente funcion cada vez que se hace click en un casillero
//Verifica que el casillero no sea una mina y si es lo muestra el mensaje adecuado y deshabilita los botones
//Si no es una mina llama un metodo para verificar cuantas minas hay a su alrededor y si es 0 llama a otro metodo
//El cual verifica los casilleros alrededor.
function verificar(){
    if(tiempoInicio===null){
        cronometroIniciar();    
    }
    this.disabled=true;
    if(this.value==="-1"){
        terminarJuego();
        this.style.borderColor=obtenerColor(-1);
        this.style.background=obtenerColor(-1);
        alert("Has perdido.");
    }else if(this.value==="0"){
        casillerosSinMinas--;
        if(casillerosSinMinas===0){
            terminarJuego();
            alert("Has Ganado!");
        }
        var minas=contarOcultas(this);
        if(minas===0){
            var botonesAVerificar=casillerosContinuos(this);
            for(var i=0;i<botonesAVerificar.length;i++){
                if(botonesAVerificar[i]!==null){
                    if(botonesAVerificar[i].disabled===false){
                        verificarSubCasillero(botonesAVerificar[i]);
                    }
                }
            }
            this.style.borderColor=obtenerColor(minas);
            this.style.background=obtenerColor(minas);
        }else{
            this.setAttribute("value",minas);
            this.style.color="white";
            this.style.borderColor=obtenerColor(minas);
            this.style.background=obtenerColor(minas);
        }
        
    }
}
/*Luego de creado el tablero se ejecuta la siguiente funcion que reparte minas por el tablero
de forma aleatoria y inicializa la variable casilleros sin minas*/
function colocarMinas(cantidadDeMinas){
    var cantidadDeMinasOriginal=cantidadDeMinas;
    cantidadDeMinas=(Math.floor(Math.pow((cantidadDeMinas/6),3)));
    casillerosSinMinas=(cantidadDeMinasOriginal*cantidadDeMinasOriginal)-cantidadDeMinas;
    var tablero=document.getElementById("tablero");
    var botones=tablero.getElementsByTagName("input");
    for(;cantidadDeMinas>0;cantidadDeMinas--){
        var numeroDeBoton=Math.floor(Math.random()*(cantidadDeMinasOriginal*cantidadDeMinasOriginal));
        if(botones[numeroDeBoton].value==="0"){
            botones[numeroDeBoton].value="-1";
        }else if(botones[numeroDeBoton].value==="-1"){
            while(botones[numeroDeBoton].value==="-1"){
                numeroDeBoton=Math.floor(Math.random()*(cantidadDeMinasOriginal*cantidadDeMinasOriginal));
            }
            botones[numeroDeBoton].value="-1";
        }
    }
}
//Segun la eleccion del jugador crean un tablero acorde.
function dibujarTablero(){
    document.getElementById("dificultades").style.display="none";
    document.getElementById("r").style.display="initial";
    document.getElementById("v").style.display="initial";
    document.getElementById("tablero").style.display="initial";
    var tablero=document.getElementById("tablero");
    var tamanio=this.textContent;
    for(var i=0;i<tamanio;i++){
        var fila=document.createElement("div");
        fila.setAttribute("class","fila");
        for(var j=0;j<tamanio;j++){
            var contenedor=document.createElement("div");
            var ancho=100/tamanio;
            contenedor.style.width=ancho+"%";
            contenedor.setAttribute("class","casilleroBuscaMinas");
            var boton=document.createElement("input");
            boton.onclick=verificar;
            boton.setAttribute("class","botonBuscaminas");
            boton.setAttribute("id",i+"-"+j);
            boton.setAttribute("type","button");
            boton.setAttribute("value","0");
            contenedor.appendChild(boton);
            fila.appendChild(contenedor);
        }
        tablero.appendChild(fila);
    }
    colocarMinas(tamanio);
}
//Crea y muestra el selector de dificultad.
function dificultad(){
    document.getElementById("dificultades").style.display="initial";
    document.getElementById("r").style.display="none";
    document.getElementById("v").style.display="none";
    document.getElementById("tablero").style.display="none";
    var fila1=document.createElement("div");
    var fila2=document.createElement("div");
    var fila3=document.createElement("div");
    fila1.setAttribute("class","row");
    fila2.setAttribute("class","row");
    fila3.setAttribute("class","row");
    var dificultadFacilBoton=document.createElement("input");
    var dificultadMediaBoton=document.createElement("input");
    var dificultadDificilBoton=document.createElement("input");
    dificultadFacilBoton.value="Facil";
    dificultadMediaBoton.value="Medio";
    dificultadDificilBoton.value="Dificil";
    dificultadFacilBoton.textContent="10";
    dificultadMediaBoton.textContent="30";
    dificultadDificilBoton.textContent="50";
    dificultadFacilBoton.onclick=dibujarTablero;
    dificultadMediaBoton.onclick=dibujarTablero;
    dificultadDificilBoton.onclick=dibujarTablero;
    dificultadFacilBoton.setAttribute("id","botonFacil");
    dificultadMediaBoton.setAttribute("id","botonMedio");
    dificultadDificilBoton.setAttribute("id","botonDificil");
    dificultadFacilBoton.setAttribute("class","btn btn-primary btn-lg btn-block");
    dificultadMediaBoton.setAttribute("class","btn btn-primary btn-lg btn-block");
    dificultadDificilBoton.setAttribute("class","btn btn-primary btn-lg btn-block");
    fila1.appendChild(dificultadFacilBoton);
    fila2.appendChild(dificultadMediaBoton);
    fila3.appendChild(dificultadDificilBoton);
    document.getElementById("dificultades").appendChild(fila1);
    document.getElementById("dificultades").appendChild(fila2);
    document.getElementById("dificultades").appendChild(fila3);
}
//Borra el tablero y selector de dificultad y luego llama a la funcion que crea el tablero de dificultad.
function volver(){
    var juego=document.getElementById("tablero");
    while(juego.firstChild){
        juego.removeChild(juego.firstChild);
    }
    var selector=document.getElementById("dificultades");
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
    document.getElementById("cronometroDiv").innerHTML=0;
    tiempoInicio=null;
    clearTimeout(temporizador);
    dificultad();
}
//Reinicia el juego vaciando los casilleros de minas, rehabilitando los botones y llamando a la funcion colocar minas.
function reiniciar(){
    var tablero=document.getElementById("tablero");
    var botones=tablero.getElementsByTagName("input");
    for(var i=0;i<botones.length;i++){
        botones[i].disabled=false;
        botones[i].value="0";
        botones[i].style.color="transparent";
        botones[i].style.borderColor="#337ab7";
        botones[i].style.background="#337ab7";
    }
    colocarMinas(Math.sqrt(botones.length));
    document.getElementById("cronometroDiv").innerHTML=0;
    tiempoInicio=null;
    clearTimeout(temporizador);
}
//La app inicia al cargarse la pagina.
window.onload=function(){
    dificultad();
    document.getElementById("r").onclick=reiniciar;
    document.getElementById("v").onclick=volver;
};