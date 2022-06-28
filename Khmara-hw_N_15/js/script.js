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
        return result;
      }
  }
}
  
const first = calc(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

first.getResult();

console.log(first.getResult());
