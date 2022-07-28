const bgDiv = document.getElementById('box');
const prev = document.getElementById('arrowPrev');
const next = document.getElementById('arrowNext');
const min = 0;
const max = 13;
let currentImage = getRndInteger(min, max);
const imageElement = createAlbumImage();

let intervalId = setInterval(changeImages, 3000);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function createAlbumImage(){
    const image = document.createElement('img');
    image.setAttribute('src', `img/${currentImage}.jpg`); 
    const parent = document.getElementById('main');
    bgDiv.style.background = `url(img/${currentImage}.jpg) no-repeat center center`; 
    bgDiv.style.backgroundSize = 'cover';
    parent.appendChild(image);
    return image;
}

function changeImages(){
    currentImage++;
    if(currentImage + 1 > max){
        currentImage = min;
    }
    imageElement.setAttribute('src', `img/${currentImage}.jpg`);
    bgDiv.style.background = `url(img/${currentImage}.jpg) no-repeat center center`; 
    bgDiv.style.backgroundSize = 'cover'; 
}

function clickPrev(){
    clearInterval(intervalId);
    currentImage--;
    if(currentImage < 0){
        currentImage = max;
    }
    imageElement.setAttribute('src', `img/${currentImage}.jpg`);
    bgDiv.style.background = `url(img/${currentImage}.jpg) no-repeat center center`; 
    bgDiv.style.backgroundSize = 'cover'; 
    intervalId = setInterval(changeImages, 3000);
}

function clickNext(){
    clearInterval(intervalId);
    changeImages();
    intervalId = setInterval(changeImages, 3000);
}

prev.addEventListener('click', clickPrev);
next.addEventListener('click', clickNext);