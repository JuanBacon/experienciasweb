let values = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let columns;
function randomColor(number){
    let colour = "#";
    for(var i = 0; i < 6; i ++){
        colour += values[Math.floor(Math.random()*16)]
    }
    document.getElementsByClassName("column")[number].style = `background-color: ${colour}`;
    document.getElementsByTagName("h1")[number].innerHTML = `HEX: ${colour}`;
}
function firstColor(columns){
    for(var i = 0; i <= columns -1; i++){
        randomColor(i);
    }
}

