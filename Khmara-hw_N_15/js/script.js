function calc(a){
  const add = function(b){
    return b + a
  }
  const sub = function(c){
    return c - a
  }
  const div = function(d){
    return d / a
  }
  const mult = function(e){
    return e * a
  }
  const getResult = function(a,b,c,d,e){
    return (((a+b)-c)/d)*e
  }
  return {
    add,
    sub,
    div,
    mult,
    getResult
  }
}

const first = calc(4);

console.log("object return = ");
console.log(first);

console.log("function add: 33 + 4 = " + first.add(33));
console.log("function sub: 12 - 4 = " + first.sub(12));
console.log("function div: 2 / 4 = " + first.div(2));
console.log("function mult: 4 * 4 = " + first.mult(4));

console.log("function getResult: (((4 + 33) - 12) / 2) * 4 = " + first.getResult(4,33,12,2,4));