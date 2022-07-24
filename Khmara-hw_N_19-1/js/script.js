const clockBox = document.getElementById('clock');

function time() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0").split("");
    const minutes = date.getMinutes().toString().padStart(2, "0").split("");
    const seconds = date.getSeconds().toString().padStart(2, "0").split("");

    const hourL = document.getElementById('hoursL');
    const hourR = document.getElementById('hoursR');
    const minL = document.getElementById('minutesL');
    const minR = document.getElementById('minutesR');
    const secL = document.getElementById('secondsL');
    const secR = document.getElementById('secondsR');

    hourL.src = `img/${hours[0]}.png`;
    hourR.src = `img/${hours[1]}.png`;
    minL.src = `img/${minutes[0]}.png`;
    minR.src = `img/${minutes[1]}.png`;
    secL.src = `img/${seconds[0]}.png`;
    secR.src = `img/${seconds[1]}.png`;
  };

setInterval(time, 1000);