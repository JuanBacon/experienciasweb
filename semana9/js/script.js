let memesDir = ["meme0","meme1","meme2","meme3","meme4","meme5"];
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomCaptcha = "";
let imgDir = "../assets/img/memes/";
const imgContainer = document.getElementById("memeImg");
const captcha = document.getElementById("captchaLabel");
let captchaInput = document.getElementById("captcha");


function firstLoad(){
    imgContainer.src = imgDir + memesDir[0] + ".png"
    getRandomCaptcha();
}

function submit(){
    let captchaInput = document.getElementById("captcha");
    if(captchaInput.value === randomCaptcha){
        getRandomImage();
        getRandomCaptcha();
        captchaInput.value ="";
    } else{
        alert("CAPTCHA INCORRECTO");
        captchaInput.value ="";
    }
}

function getRandomCaptcha(){
    randomCaptcha = ""
    for(let i = 0; i < 6; i++){
        randomCaptcha += characters.charAt(Math.floor(Math.random()*36));
    }
    captcha.innerHTML ="CAPTCHA: " +  randomCaptcha;
}

function getRandomImage(){
    imgContainer.src = imgDir + memesDir[Math.floor(Math.random()*5)]+ ".PNG"
}