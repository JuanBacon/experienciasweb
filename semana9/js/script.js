let memesDir = ["meme0","meme1","meme2","meme3","meme4","meme5","meme6","meme7","meme8","meme9","meme10","meme11","meme12","meme13","meme14","meme15","meme16","meme17"];
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomCaptcha = "";
let imgDir = "../assets/img/memes/";
const imgContainer = document.getElementById("memeImg");
const captcha = document.getElementById("captchaLabel");
let captchaInput = document.getElementById("captcha");
let placeError = document.getElementById("textErrorPlace");
let textError = document.createTextNode("Captcha incorrecto, intentalo de nuevo");

function getRandomCaptcha(){
    randomCaptcha = ""
    for(let i = 0; i < 6; i++){
        randomCaptcha += characters.charAt(Math.floor(Math.random()*36));
    }
    captcha.innerHTML = randomCaptcha;
}

function getRandomImage(){
    imgContainer.src = imgDir + memesDir[Math.floor(Math.random()*18)]+ ".PNG"
}

function firstLoad(){
    imgContainer.src = imgDir + memesDir[6] + ".png"
    getRandomCaptcha();
}

function submit(){

    if(captchaInput.value === randomCaptcha){
        getRandomImage();
        getRandomCaptcha();
        captchaInput.value ="";
    } else{
        placeError.appendChild(textError);
        captchaInput.value ="";
        setTimeout(function(){
            textError.parentNode.removeChild(textError);
        }, 2000);
    }
}

