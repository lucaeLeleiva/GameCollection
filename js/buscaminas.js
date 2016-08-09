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
        var numeroDeBoton=Math.floor(Math.random()*(cantidadDeMinasOriginal*cantidadDeMinasOriginal));
        if(botones[numeroDeBoton].value=="0"){
            botones[numeroDeBoton].value="-1";
        }else if(botones[numeroDeBoton].value=="-1"){
            while(botones[numeroDeBoton].value=="-1"){
                numeroDeBoton=Math.floor(Math.random()*(cantidadDeMinasOriginal*cantidadDeMinasOriginal));
            }
            botones[numeroDeBoton].value="-1";
        }
    }
}
function verificar(){
    this.disabled=true;
    var tablero=document.getElementById("tablero");
    var botones=tablero.getElementsByTagName("input");
    var id=this.id;
    var indiceGuion=id.indexOf('-');
    var idNumero1=id.substring(0,(indiceGuion));
    var idNumero2=id.substring((indiceGuion+1));
    if(this.value=="-1"){
        for(var i=0;i<botones.length;i++){
            botones[i].disabled=true;
        }
        alert("Has perdido.");
    }else if(this.value=="0"){
        var minas=contarOcultas(this);
        if(minas==0){
            var boton1=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
            var boton2=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)-1).toString()));
            var boton3=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
            var boton4=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)).toString()));
            var boton5=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)).toString()));
            var boton6=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
            var boton7=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)+1).toString()));
            var boton8=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
            var botonesAVerificar=[boton1,boton2,boton3,boton4,boton5,boton6,boton7,boton8];
            for(var i=0;i<botonesAVerificar.length;i++){
                if(botonesAVerificar[i]!=null){
                    verificarSubCasillero(botonesAVerificar[i]);
                }
            }
            this.style.background="#1530AE";
        }else{
            this.setAttribute("value",minas);
        }
    }
}
function verificarSubCasillero(boton){
    boton.disabled=true;
    var id=boton.id;
    var indiceGuion=id.indexOf('-');
    var idNumero1=id.substring(0,(indiceGuion));
    var idNumero2=id.substring((indiceGuion+1));
    if(boton.value=="0"){
        var minas=contarOcultas(boton);
        if(minas==0){
            var boton1=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
            var boton2=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)-1).toString()));
            var boton3=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
            var boton4=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)).toString()));
            var boton5=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)).toString()));
            var boton6=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
            var boton7=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)+1).toString()));
            var boton8=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
            var botonesAVerificar=[boton1,boton2,boton3,boton4,boton5,boton6,boton7,boton8];
            for(var i=0;i<botonesAVerificar.length;i++){
                if(botonesAVerificar[i]!=null){
                    if(botonesAVerificar[i].disabled==false){
                        setTimeout(verificarSubCasillero(botonesAVerificar[i]),1000);
                    }
                }
            }
        }else{
            boton.setAttribute("value",minas);
        }
    }
}
function contarOcultas(boton){
    var id=boton.id;
    var indiceGuion=id.indexOf('-');
    var idNumero1=id.substring(0,(indiceGuion));
    var idNumero2=id.substring((indiceGuion+1));
    var cantidadDeMinas=0;
    var boton1=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
    var boton2=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)-1).toString()));
    var boton3=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)-1).toString()));
    var boton4=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)).toString()));
    var boton5=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)).toString()));
    var boton6=document.getElementById(((parseInt(idNumero1)-1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
    var boton7=document.getElementById(((parseInt(idNumero1)).toString())+"-"+((parseInt(idNumero2)+1).toString()));
    var boton8=document.getElementById(((parseInt(idNumero1)+1).toString())+"-"+((parseInt(idNumero2)+1).toString()));
    var botones=[boton1,boton2,boton3,boton4,boton5,boton6,boton7,boton8];
    for(var i=0;i<botones.length;i++){
        if(botones[i]!=null){
            if(botones[i].value=="-1"){
                cantidadDeMinas++;
            }
        }
    }
    return cantidadDeMinas;
}