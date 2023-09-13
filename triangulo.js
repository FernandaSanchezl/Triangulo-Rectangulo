function activar(){
    var fuerza = document.getElementById('fuerza').value;
    var angulo = document.getElementById('angulo').value;
    var co = fuerza * Math.sin(angulo * Math.PI/180);
    var ca = fuerza * Math.cos(angulo * Math.PI/180);
    var seno = co/fuerza;
    var coseno = ca/fuerza;
    document.getElementById("cOp").innerHTML = "Cateto Opuesto: " + co;
    document.getElementById("cAd").innerHTML = "Cateto Adyasente: " + ca;
    document.getElementById("seno").innerHTML = "Seno Ɵ: " + seno ;
    document.getElementById("coseno").innerHTML = "Coseno Ɵ: " + coseno;   

}