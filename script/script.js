const buttonImg = document.getElementById("play");

buttonImg.addEventListener("click", playLamp);

function playLamp(){
    const whiteLamp = document.querySelector("img");
    whiteLamp.src = "img/yellow_lamp.png";
}