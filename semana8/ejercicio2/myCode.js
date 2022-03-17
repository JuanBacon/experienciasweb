let valores = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function randomColor(number){
    let color = "#";
    for(var i = 0; i < 6; i ++){
        color += valores[Math.floor(Math.random()*16)]
    }
    document.getElementsByClassName("column")[number].style = `background-color: ${color}`;
    document.getElementsByTagName("h1")[number].innerHTML = `${color}`;

}
function firstColor(){
    for(var i = 0; i <= 3; i++){
        randomColor(i);
    }
}

