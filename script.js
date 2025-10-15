
const horasElemento = document.getElementById('horas');
const minutosElemento = document.getElementById('minutos');
const segundosElemento = document.getElementById('segundos');


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let horas = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    let h = (horas < 10) ? '0' + horas : horas;
    let m = (min < 10) ? '0' + min : min;
    let s = (seg < 10) ? '0' + seg : seg;


    horasElemento.textContent = h;
    minutosElemento.textContent = m;
    segundosElemento.textContent = s;

}, 1000); 