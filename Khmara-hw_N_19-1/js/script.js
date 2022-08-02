const clockBox = document.getElementById('clock');

const date = new Date();
let hours = date.getHours().toString().padStart(2, "0").split("");
let minutes = date.getMinutes().toString().padStart(2, "0").split("");
let seconds = date.getSeconds().toString().padStart(2, "0").split("");

const hourL = document.getElementById('hoursL');
const hourR = document.getElementById('hoursR');
const minL = document.getElementById('minutesL');
const minR = document.getElementById('minutesR');
const secL = document.getElementById('secondsL');
const secR = document.getElementById('secondsR');


function time() {
 
  seconds[1]++;

  if(seconds[1] === 10){
    seconds[0]++;
    seconds[1] = 0;
      if(seconds[0] === 6){
        minutes[1]++;
        seconds[0] = 0;
        seconds[1] = 0;
      }
  }

  if(minutes[1] === 10){
    minutes[0]++;
    minutes[1] = 0;
      if(minutes[0] === 6){
      hours[1]++;
      minutes[0] = 0;
      minutes[1] = 0;
      }
  }

  if(hours[1] === 10){
    hours[0]++;
    hours[1] = 0;
  }else if(hours[0] == 2 && hours[1] == 4){
    hours[0] = 0;
    hours[1] = 0;
  }

    hourL.src = `img/${hours[0]}.png`;
    hourR.src = `img/${hours[1]}.png`;
    minL.src = `img/${minutes[0]}.png`;
    minR.src = `img/${minutes[1]}.png`;
    secL.src = `img/${seconds[0]}.png`;
    secR.src = `img/${seconds[1]}.png`;
  };

setInterval(time, 1000);











// const clockBox = document.getElementById('clock');


// function time() {

// const date = new Date();
// let hours = date.getHours().toString().padStart(2, "0").split("");
// let minutes = date.getMinutes().toString().padStart(2, "0").split("");
// let seconds = date.getSeconds().toString().padStart(2, "0").split("");

// const hourL = document.getElementById('hoursL');
// const hourR = document.getElementById('hoursR');
// const minL = document.getElementById('minutesL');
// const minR = document.getElementById('minutesR');
// const secL = document.getElementById('secondsL');
// const secR = document.getElementById('secondsR');
  
//     hourL.src = `img/${hours[0]}.png`;
//     hourR.src = `img/${hours[1]}.png`;
//     minL.src = `img/${minutes[0]}.png`;
//     minR.src = `img/${minutes[1]}.png`;
//     secL.src = `img/${seconds[0]}.png`;
//     secR.src = `img/${seconds[1]}.png`;
//   };

// setInterval(time, 1000);