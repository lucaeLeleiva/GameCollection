window.onload=function(){
    dificultad();
};
function dificultad(){
    document.getElementById("dificultades").style.display="initial";
    document.getElementById("r").style.display="none";
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
    fila1.appendChild(dificultadFacilBoton);
    fila2.appendChild(dificultadMediaBoton);
    fila3.appendChild(dificultadDificilBoton);
    document.getElementById("dificultades").appendChild(fila1);
    document.getElementById("dificultades").appendChild(fila2);
    document.getElementById("dificultades").appendChild(fila3);
}
function dibujarTableroFacil(){
    document.getElementById("dificultades").style.display="none";
    document.getElementById("r").style.display="initial";
    document.getElementById("tablero").style.display="initial";
    var tablero=document.getElementById("tablero");
    var tamanio=10;
    for(var i=0;i<tamanio;i++){
        var fila=document.createElement("div");
        fila.setAttribute("class","fila");
        for(var j=0;j<tamanio;j++){
            var contenedor=document.createElement("div");
            contenedor.setAttribute("class","casilleroBuscaMinasFacil");
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
function dibujarTableroMedio(){
    document.getElementById("dificultades").style.display="none";
    document.getElementById("r").style.display="initial";
    document.getElementById("tablero").style.display="initial";
    var tablero=document.getElementById("tablero");
    var tamanio=30;
    for(var i=0;i<tamanio;i++){
        var fila=document.createElement("div");
        fila.setAttribute("class","fila");
        for(var j=0;j<tamanio;j++){
            var contenedor=document.createElement("div");
            contenedor.setAttribute("class","casilleroBuscaMinasMedio");
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
function dibujarTableroDificil(){
    document.getElementById("dificultades").style.display="none";
    document.getElementById("r").style.display="initial";
    document.getElementById("tablero").style.display="initial";
    var tablero=document.getElementById("tablero");
    var tamanio=50;
    for(var i=0;i<tamanio;i++){
        var fila=document.createElement("div");
        fila.setAttribute("class","fila");
        for(var j=0;j<tamanio;j++){
            var contenedor=document.createElement("div");
            contenedor.setAttribute("class","casilleroBuscaMinasDificil");
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
function colocarMinas(cantidadDeMinas){
    var cantidadDeMinasOriginal=cantidadDeMinas;
    cantidadDeMinas*=2;
    var tablero=document.getElementById("tablero");
    var botones=tablero.getElementsByTagName("input");
    for(;cantidadDeMinas>0;cantidadDeMinas--){
        var numeroDeBoton=Math.floor(Math.random()*(cantidadDeMinasOriginal - 0));
        if(botones[numeroDeBoton].value=="0"){
            botones[numeroDeBoton].value="-1";
        }else if(botones[numeroDeBoton].value=="-1"){
            while(botones[numeroDeBoton].value=="-1"){
                numeroDeBoton=Math.floor(Math.random()*(cantidadDeMinasOriginal - 0));
            }
            botones[numeroDeBoton].value="-1";
        }
    }
}
function verificar(){
    var tablero=document.getElementById("tablero");
    var botones=tablero.getElementsByTagName("input");
    var id=this.id;
    var indiceGuion=id.indexOf('-');
    var idNumero1=id.substring(0,indiceGuion);
    var idNumero2=id.substring(indiceGuion,(id.length - 1));
    if(this.value=="-1"){
        for(var i=0;i<botones.length;i++){
            botones[i].disabled=true;
        }
        alert("Has perdido.");
    }else if(this.value=="0"){
        var minas=contarOcultas(this);
        if(minas==0){
            if((document.getElementById((idNumero1-1).toString()+"-"+(idNumero2 - 1).toString()))!=null){
                verificarSubCasillero(document.getElementById((idNumero1 - 1).toString()+"-"+(idNumero2 - 1).toString()));
            }
            if((document.getElementById((idNumero1).toString()+"-"+(idNumero2 - 1).toString()))!=null){
                verificarSubCasillero(document.getElementById((idNumero1).toString()+"-"+(idNumero2 - 1).toString()));
            }
            if((document.getElementById((idNumero1 - 1).toString()+"-"+(idNumero2).toString()))!=null){
                verificarSubCasillero(document.getElementById((idNumero1 - 1).toString()+"-"+(idNumero2).toString()));
            }
            if((document.getElementById((idNumero1).toString()+"-"+(idNumero2 + 1).toString()))!=null){
                verificarSubCasillero(document.getElementById((idNumero1).toString()+"-"+(idNumero2 + 1).toString()));
            }
            if((document.getElementById((idNumero1 + 1).toString()+"-"+(idNumero2).toString()))!=null){
                verificarSubCasillero(document.getElementById((idNumero1 + 1).toString()+"-"+(idNumero2).toString()));
            }
            if((document.getElementById((idNumero1 + 1).toString+"-"+(idNumero2 + 1).toString))!=null){
                verificarSubCasillero(document.getElementById((idNumero1 + 1).toString()+"-"+(idNumero2 + 1).toString()));
            }
            if((document.getElementById((idNumero1 - 1).toString()+"-"+(idNumero2 + 1).toString()))!=null){
                verificarSubCasillero(document.getElementById((idNumero1 - 1).toString()+"-"+(idNumero2 + 1).toString()));
            }
            if(document.getElementById((idNumero1 + 1).toString()+"-"+(idNumero2 - 1).toString())!=null){
                verificarSubCasillero(document.getElementById((idNumero1 + 1 ).toString()+"-"+(idNumero2 - 1).toString()));
            }
        }else{
            this.setAttribute("value",minas);
        }
        this.disabled=true;
        
    }
}
function verificarSubCasillero(boton){
    var tablero=document.getElementById("tablero");
    var botones=tablero.getElementsByTagName("input");
    var id=boton.id;
    var indiceGuion=id.indexOf('-');
    var idNumero1=id.substring(0,indiceGuion);
    var idNumero2=id.substring(indiceGuion,(id.length-1));
    if(boton.value=="-1"){
        for(var i=0;i<botones.length;i++){
            botones[i].disabled=true;
        }
        alert("Has perdido.");
    }else if(boton.value=="0"){
        var minas=contarOcultas(boton);
        if(minas==0){
            var boton1=document.getElementById((idNumero1-1)+"-"+(idNumero2-1));
            var boton2=document.getElementById((idNumero1)+"-"+(idNumero2-1));
            var boton3=document.getElementById((idNumero1+1)+"-"+(idNumero2-1));
            var boton4=document.getElementById((idNumero1-1)+"-"+(idNumero2));
            var boton5=document.getElementById((idNumero1+1)+"-"+(idNumero2));
            var boton6=document.getElementById((idNumero1-1)+"-"+(idNumero2+1));
            var boton7=document.getElementById((idNumero1)+"-"+(idNumero2+1));
            var boton8=document.getElementById((idNumero1+1)+"-"+(idNumero2+1));
            verificarSubCasillero(boton1);
            verificarSubCasillero(boton2);
            verificarSubCasillero(boton3);
            verificarSubCasillero(boton4);
            verificarSubCasillero(boton5);
            verificarSubCasillero(boton6);
            verificarSubCasillero(boton7);
            verificarSubCasillero(boton8);
        }
    }
}
function contarOcultas(boton){
    var id=boton.id;
    var indiceGuion=id.indexOf('-');
    var idNumero1=id.substring(0,indiceGuion);
    var idNumero2=id.substring(indiceGuion,(id.length-1));
    var cantidadDeMinas=0;
    var boton1=document.getElementById((idNumero1-1)+"-"+(idNumero2-1));
    var boton2=document.getElementById((idNumero1)+"-"+(idNumero2-1));
    var boton3=document.getElementById((idNumero1+1)+"-"+(idNumero2-1));
    var boton4=document.getElementById((idNumero1-1)+"-"+(idNumero2));
    var boton5=document.getElementById((idNumero1+1)+"-"+(idNumero2));
    var boton6=document.getElementById((idNumero1-1)+"-"+(idNumero2+1));
    var boton7=document.getElementById((idNumero1)+"-"+(idNumero2+1));
    var boton8=document.getElementById((idNumero1+1)+"-"+(idNumero2+1));
    if(boton1.value=="-1"){
        cantidadDeMinas++;
    }
    if(boton2.value=="-1"){
        cantidadDeMinas++;
    }
    if(boton3.value=="-1"){
        cantidadDeMinas++;
    }
    if(boton4.value=="-1"){
        cantidadDeMinas++;
    }
    if(boton5.value=="-1"){
        cantidadDeMinas++;
    }
    if(boton6.value=="-1"){
        cantidadDeMinas++;
    }
    if(boton7.value=="-1"){
        cantidadDeMinas++;
    }
    if(boton8.value=="-1"){
        cantidadDeMinas++;
    }
    return cantidadDeMinas;
}