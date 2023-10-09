// Programa de Declaracion Quieres ser mi novia? By: Geovas or MartL7

let gifs=["https://media2.giphy.com/media/ZbNf1WwVYwqeOXsLmV/giphy.gif?cid=ecf05e47f4gjsp1pqmz4ejzutk6bl5vcz15plko7d0ahwa7o&rid=giphy.gif&ct=g", 
 "https://media0.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=ecf05e47cdok3zat2qay98u9joz0pf6dim82i4nmxa3eb6li&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/94EQmVHkveNck/giphy.gif?cid=ecf05e47jpmqkkq843w29vghgzr5y1fvcud4vj68s8qfe517&ep=v1_gifs_search&rid=giphy.gif&ct=g",
   "https://media4.giphy.com/media/obBRY85qHrHIOX7TsF/giphy.gif?cid=ecf05e47g01tgl9ov0hv15occzb2bphprisls03jshtr0d40&rid=giphy.gif&ct=g"];

const FondoPagina = document.querySelector('body');
const BotonNovia = document.getElementById("BotonNovia");
const Intro = document.getElementById("Intro");
const BotonSi = document.querySelector('#BotonSi');
const BotonNo = document.querySelector('#BotonNo');
const gif = document.getElementById("gif");
const Texto = document.getElementById("Texto");
const cuadrado = document.querySelector(".cuadro-emergente");

function ModoNovia() {
    document.title = "Quieres ser mi novia?";
    BotonNovia.remove();
    FondoPagina.style.backgroundImage = "url(https://www.soycarmin.com/__export/1455477920935/sites/debate/img/celebs/2016/02/14/corazon-con-manos-1481.jpg_242310155.jpg)";
    Intro.remove();
    const ContenedorP = document.getElementById("ContenedorPrincipal");
    ContenedorP.style.display = "block";
}

function MouseRandom(mouse) {
    mouse.style.position = 'absolute';
    mouse.style.top = Math.random() * (window.innerHeight - mouse.offsetHeight) + 'px';
    mouse.style.left = Math.random() * (window.innerWidth - mouse.offsetWidth) + 'px';
}

BotonNo.addEventListener('mouseenter', function(e) { 
    MouseRandom(e.target);
});

BotonSi.addEventListener('click', function(e) { 
    clearTimeout(tim);
    gif.remove();
    cuadrado.style.display = "block";
    Texto.innerHTML = "Sabia que dirias que Si <3, gracias por aceptar. 💗💗💗💗";
});

document.getElementById("BotonCerrar").addEventListener('click', ()=> {
    cuadrado.style.display = "none";
})

function rogar() {
     const img = document.createElement("img");
     let cambio = Math.floor(Math.random() * gifs.length);  
     img.src = gifs[cambio];
     gif.appendChild(img);

    setTimeout( ()=> {
        gif.removeChild(gif.firstElementChild);
    },8000);
}
let tim = setInterval(rogar,8000);

BotonNo.addEventListener('click', function(e) {
    alert('¿Me rechazaste? 💔💔💔');
});