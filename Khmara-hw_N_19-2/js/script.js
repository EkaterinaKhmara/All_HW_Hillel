let arrPic = [
    `img/0.jpg`,
    `img/1.jpg`,
    `img/2.jpg`,
    `img/3.jpg`,
    `img/4.jpg`,
    `img/5.jpg`,
    `img/6.jpg`,
    `img/7.jpg`,
    `img/8.jpg`,
    `img/9.jpg`,
    `img/10.jpg`,
    `img/11.jpg`,
    `img/12.jpg`,
    `img/13.jpg`];

const bgDiv = document.getElementById('box');
const prev = document.getElementById('arrowPrev');
const next = document.getElementById('arrowNext');
const min = 0;
const max = 13;
let currentImage = getRndInteger(min, max);
let picInArrNum = Number(arrPic[currentImage].replace(/[^0-9]/g,""));
const imageElement = createAlbumImage();
let intervalId = setInterval(changeImages, 3000);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function createAlbumImage(){
    const image = document.createElement('img');
    image.setAttribute('src', `img/${picInArrNum}.jpg`); 
    const parent = document.getElementById('main');
    bgDiv.style.background = `url(img/${picInArrNum}.jpg) center center / cover no-repeat`; 
    parent.appendChild(image);
    return image;
}

function changeImages(){
    picInArrNum++;
        if(picInArrNum + 1 > max){
            picInArrNum = min;
        }
        imageElement.setAttribute('src', `img/${picInArrNum}.jpg`);
        bgDiv.style.background = `url(img/${picInArrNum}.jpg) center center / cover no-repeat`; 
}

function clickPrev(){
    clearInterval(intervalId);
    picInArrNum--;
    if(picInArrNum < 0){
        picInArrNum = max;
    }
    imageElement.setAttribute('src', `img/${picInArrNum}.jpg`);
    bgDiv.style.background = `url(img/${picInArrNum}.jpg) center center / cover no-repeat`; 
    intervalId = setInterval(changeImages, 3000);
}

function clickNext(){
    clearInterval(intervalId);
    changeImages();
    intervalId = setInterval(changeImages, 3000);
}

prev.addEventListener('click', clickPrev);
next.addEventListener('click', clickNext);