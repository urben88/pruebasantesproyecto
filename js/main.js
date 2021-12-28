var titulo = document.querySelector('h1');
var curculo = document.querySelector('.circu');
function cronometro(tiempo){
    var minutos = 00;
    var segundo = 1;
    var cadena = `00:00`;
    titulo.textContent = cadena;
    var inter = setInterval(() => {
        if(segundo == 60){
            segundo = 0;
            minutos ++;
        }
        cadena = `${formatocrono(minutos)}:${formatocrono(segundo)}`;
        titulo.textContent = cadena;
        segundo++;
    }, tiempo);
}
function formatocrono(dato){
    let cadena;
    if(dato < 10){
        cadena="0"+dato;
    }else{
        cadena = dato;
    }
    return cadena;
}
cronometro(1000);
let visto = true;
setInterval(() => {
    if(visto){
        curculo.style.display = "none"
        visto = false;
    }else{
        curculo.style.display = "block"
        visto = true;
    }
}, 1000);