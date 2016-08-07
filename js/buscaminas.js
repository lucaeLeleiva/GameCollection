window.onload=function(){
    dificultad();
}
function dificultad(){
    document.getElementById("r").style.display="none";
    document.getElementById("tablero").style.display="none";
    var fila1=document.createElement("tr");
    var fila2=document.createElement("tr");
    var fila3=document.createElement("tr");
    var dato1=document.createElement("td");
    var dato2=document.createElement("td");
    var dato3=document.createElement("td");
    var dificultadFacilBoton=document.createElement("input");
    var dificultadMediaBoton=document.createElement("input");
    var dificultadDificilBoton=document.createElement("input");
    dificultadFacilBoton.value="Facil";
    dificultadMediaBoton.value="Medio";
    dificultadDificilBoton.value="Dificil";
    dificultadFacilBoton.textContent="Facil";
    dificultadMediaBoton.textContent="Medio";
    dificultadDificilBoton.textContent="Dificil";
    dificultadFacilBoton.onclick=dibujarTableroFacil;
    dificultadMediaBoton.onclick=dibujarTableroMedio;
    dificultadDificilBoton.onclick=dibujarTableroDificil;
    dificultadFacilBoton.setAttribute("id","botonFacil");
    dificultadMediaBoton.setAttribute("id","botonMedio");
    dificultadDificilBoton.setAttribute("id","botonDificil");
    dificultadFacilBoton.setAttribute("class","btn btn-primary btn-lg btn-block");
    dificultadMediaBoton.setAttribute("class","btn btn-primary btn-lg btn-block");
    dificultadDificilBoton.setAttribute("class","btn btn-primary btn-lg btn-block");
    dato1.appendChild(dificultadFacilBoton);
    dato2.appendChild(dificultadMediaBoton);
    dato3.appendChild(dificultadDificilBoton);
    fila1.appendChild(dato1);
    fila2.appendChild(dato2);
    fila3.appendChild(dato3);
    document.getElementById("dificultades").appendChild(fila1);
    document.getElementById("dificultades").appendChild(fila2);
    document.getElementById("dificultades").appendChild(fila3);
}
function dibujarTableroFacil(){
    document.getElementById("dificultades").style.display="none";
    document.getElementById("r").style.display="block";
    document.getElementById("tablero").style.display="block";
    var tablero=document.getElementById("tablero");
    for(var i=0;i<10;i++){
        var fila=document.createElement("tr");
        fila.setAttribute("class","fila");
        for(var j=0;j<10;j++){
            var contenedor=document.createElement("td");
            contenedor.setAttribute("class","casillero buscaminasFacil");
            var boton=document.createElement("input");
            boton.onclick=verificar;
            boton.setAttribute("class","btn btn-primary btn-lg btn-block");
            boton.setAttribute("id",i+"-"+j);
            boton.setAttribute("type","button");
            contenedor.appendChild(boton);
            fila.appendChild(contenedor);
        }
        tablero.appendChild(fila);
    }
    juego();
}
function dibujarTableroMedio(){
    document.getElementById("dificultades").style.display="none";
    document.getElementById("r").style.display="block";
    document.getElementById("tablero").style.display="block";
    var tablero=document.getElementById("tablero");
    for(var i=0;i<30;i++){
        var fila=document.createElement("tr");
        fila.setAttribute("class","fila");
        for(var j=0;j<30;j++){
            var contenedor=document.createElement("td");
            contenedor.setAttribute("class","casillero buscaminasMedio");
            var boton=document.createElement("input");
            boton.onclick=verificar;
            boton.setAttribute("class","btn btn-primary btn-lg btn-block");
            boton.setAttribute("id",i+"-"+j);
            boton.setAttribute("type","button");
            contenedor.appendChild(boton);
            fila.appendChild(contenedor);
        }
        tablero.appendChild(fila);
    }
    juego();
}
function dibujarTableroDificil(){
    document.getElementById("dificultades").style.display="none";
    document.getElementById("r").style.display="block";
    document.getElementById("tablero").style.display="block";
    var tablero=document.getElementById("tablero");
    for(var i=0;i<50;i++){
        var fila=document.createElement("tr");
        fila.setAttribute("class","fila");
        for(var j=0;j<50;j++){
            var contenedor=document.createElement("td");
            contenedor.setAttribute("class","casillero buscaminasDificil");
            var boton=document.createElement("input");
            boton.onclick=verificar;
            boton.setAttribute("class","btn btn-primary btn-lg btn-block");
            boton.setAttribute("id",i+"-"+j);
            boton.setAttribute("type","button");
            contenedor.appendChild(boton);
            fila.appendChild(contenedor);
        }
        tablero.appendChild(fila);
    }
    juego();
}
function juego(){
    
}
function verificar(){
    
}