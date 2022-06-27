function calc(result){
    return {
      add:(numAdd) => {
        result = result + numAdd;
      },
      sub: (munSub) => {
        result = result - munSub;
      },
      div: (munDiv) => {
        result = result / munDiv;
      },
      mult: (munMult) => {
        result = result * munMult;
      },
      getResult: () => {
        console.log(result);
      }
  }
}
  
const first = calc(4);
  
console.log("object return = ");
console.log(first);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

first.getResult();


// Еще перечитала, не сразу поняла что конкретно нужно делать в getResult и как оно ддолжно работать,
//  десяток раз поисправляла, и пришла к тому что выше

// Было так:

// function calc(a){
//   const add = function(b){
//     return b + a
//   }
//   const sub = function(c){
//     return c - a
//   }
//   const div = function(d){
//     return d / a
//   }
//   const mult = function(e){
//     return e * a
//   }
//   const getResult = function(a,b,c,d,e){
//     return (((a+b)-c)/d)*e
//   }
//   return {
//     add,
//     sub,
//     div,
//     mult,
//     getResult
//   }
// }

// const first = calc(4);

// console.log("object return = ");
// console.log(first);

// console.log("add: 33 + 4 = " + first.add(33));
// console.log("sub: 12 - 4 = " + first.sub(12));
// console.log("div: 2 / 4 = " + first.div(2));
// console.log("mult: 4 * 4 = " + first.mult(4));

// console.log("getResult: (((4 + 33) - 12) / 2) * 4 = " + first.getResult(4,33,12,2,4));
