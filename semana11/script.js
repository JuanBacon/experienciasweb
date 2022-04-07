const button = document.querySelector('button');
const scoreElement = document.getElementById("scoreElement");


if(typeof(localStorage)==='undefined'){
    console.log("No lo tienes");
}
if(localStorage.getItem('score')){
    scoreElement.innerHTML = localStorage.getItem('score');
}else {
    localStorage.setItem('score','0');
}

button.onclick = () => {
    const currrenScore = localStorage.getItem('score');


    localStorage.setItem('score', parseInt(currrenScore)+1);
    scoreElement.innerHTML = localStorage.getItem('score')
}

function guardarLocalstorage(){
    const persona = {
        nombre: "Camilo",
        edad: 23,
        correo: "nomelose@uao.edu.co"
    }
    localStorage.setItem('persona', JSON.stringify(persona));
}


function obtenerLocalStorage(){
    if(localStorage.getItem('persona')){
        const persona = JSON.parse(localStorage.getItem('persona'));
        console.log(persona);
        console.log('besos');
    }
}

guardarLocalstorage();
obtenerLocalStorage();