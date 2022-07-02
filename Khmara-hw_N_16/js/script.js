function bootstrap(){
  const sizeSmall = new SmallBurg(50, 20);
  const sizeMedium = new MediumBurg(75, 30);
  const sizeLarge = new LargeBurg(100, 40);

  const topCheese = new Cheese(10, 20);
  const topSalad = new Salad(20, 5);
  const topPotato = new Potato(15, 10);
  const topSpices = new Spices(15, 0);
  const topMayo = new Mayo(20, 5);

  const hamburger = new Hamburger(sizeMedium);

  hamburger.addTopping(topSalad);
  hamburger.addTopping(topPotato);

  console.log('Price with sauce: ' + hamburger.getPrice());
  console.log('Callories with sauce: ' + hamburger.getCallories());
}

bootstrap();

function SmallBurg(price, callories){
  this.price = price;
  this.callories = callories;
}

function MediumBurg(price, callories){
  this.price = price;
  this.callories = callories;
}

function LargeBurg(price, callories){
  this.price = price;
  this.callories = callories;
}

function Hamburger(type){
  let callories = type.callories;
  let price = type.price;
  return {
    addTopping: (topping) => {
      callories = callories + topping.callories;
      price = price + topping.price;
    },
    getCallories: () => {
      return callories;
    },
    getPrice: () => {
      return price;
    }
  }
};
  
function Cheese(price, callories){
  this.price = price;
  this.callories = callories;
}

function Salad(price, callories){
  this.price = price;
  this.callories = callories;
}

function Potato(price, callories){
  this.price = price;
  this.callories = callories;
}

function Spices(price, callories){
  this.price = price;
  this.callories = callories;
}

function Mayo(price, callories){
  this.price = price;
  this.callories = callories;
}