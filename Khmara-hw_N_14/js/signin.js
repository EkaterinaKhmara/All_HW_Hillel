const loginBox = document.getElementById("loginForm");
const inputMail = document.getElementById("iEmail");
const inputPass = document.getElementById("iPass");
const errorMail = document.getElementById("wrongMail");
const errorPass = document.getElementById("enterError");
const logBut = document.getElementById("loginBut");
const listBox = document.getElementById("inputBox");

const logName = "admin@mail.ua";
const logPass = "a123";

logBut.disabled = true;

function validEmail(){
    const reg = /\S+@\S+\.\S+/;
    return reg.test(inputMail.value);
}

inputMail.onblur = function() {
    if (!validEmail(inputMail.value)){
        console.log("no");
        errorMail.innerHTML = "Incorrect Email";
        inputMail.style.border = "2px solid red";
    }else{
        console.log("yes");
    }
};

inputMail.onfocus = function() {
    errorMail.innerHTML = "";
    styleDel();
}

function enterInpt(){
    if(inputMail.value.trim().length !== 0 && inputPass.value.trim().length !== 0){
        logBut.disabled = false;
        errorPass.style.display = "none";
    }else{
        logBut.disabled = true;
    }
}

function styleDel(){
    inputPass.style.border = "1px solid #cd5d00";
    inputMail.style.border = "1px solid #cd5d00";
}

function clickLogBut(){
    if(inputMail.value !== logName || inputPass.value !== logPass){
        errorPass.style.display = "block";
        inputPass.style.border = "2px solid red";
        inputMail.style.border = "2px solid red";
        inputPass.value = "";   
        logBut.disabled = true;
        setTimeout(styleDel, 1000);
    }else{
        loginBox.style.display = "none";
        listBox.style.display = "flex";
    }   
}

logBut.addEventListener("click", clickLogBut);
inputMail.addEventListener('input', enterInpt);
inputPass.addEventListener('input', enterInpt);
