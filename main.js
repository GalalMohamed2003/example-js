const body = document.querySelector("body"),
btndark=document.querySelector(".dark"),
btnlight=document.querySelector(".light"),
h1 = document.querySelector("h1"),
btnrandom = document.querySelector(".randomcolor")

function changedarkmode(){
    body.style.background= "#2d2d2d"
    h1.style.color ="#fff"
}
function changelightmode(){

    body.style.background="#fff"
    h1.style.color = "#2d2d2d"
}


function randomcolor(){
    var symbols , color;
    symbols="0123456789ABCDEF";
    color="#";
    
    for(var i=0 ; i<6 ; i++){
        color=color+symbols[Math.floor(Math.random()*16)];
    }

    body.style.background =color;
    h1.style.color="#fff"
    
}



btndark.addEventListener('click' , changedarkmode)
btnlight.addEventListener('click' , changelightmode)
btnrandom.addEventListener('click',randomcolor)