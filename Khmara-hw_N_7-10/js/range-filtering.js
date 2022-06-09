function getRandomInt(min, max) {
    let arrNums = [];
    for (let i = 0; i < 15; i++ ) {
      let randomNum = Math.floor(Math.random() * (max - min) + min);
      arrNums.push(randomNum);
    }
    return arrNums;
}

const newArr = getRandomInt(1, 50);
console.log('Task N7: Generated array = ' + newArr);

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let filtered = filterRange(newArr, 11, 35);

console.log('Task N7: Filtered array = ' + filtered); 
console.log('Task N7: Checking that the generated array has not changed = ' + newArr);