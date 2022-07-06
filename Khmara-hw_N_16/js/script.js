function bootstrap(){
  const sizeSmall = new SmallBurg(50, 20);
  const sizeMedium = new MediumBurg(75, 30);
  const sizeLarge = new LargeBurg(100, 40);

  const topCheese = new Cheese(10, 20);
  const topSalad = new Salad(20, 5);
  const topPotato = new Potato(15, 10);
  const topSpices = new Spices(15, 0);
  const topMayo = new Mayo(20, 5);

  const hamburgerS = new Hamburger(sizeSmall);
  const hamburgerM = new Hamburger(sizeMedium);
  const hamburgerL = new Hamburger(sizeLarge);

  hamburgerS.addTopping(topSalad);
  hamburgerS.addTopping(topPotato);

  hamburgerM.addTopping(topCheese);
  hamburgerM.addTopping(topSpices);

  hamburgerL.addTopping(topSalad);
  hamburgerL.addTopping(topMayo);
  hamburgerL.addTopping(topCheese);

  printBurg(hamburgerS);
  printBurg(hamburgerM);
  printBurg(hamburgerL);
}

bootstrap();

function SmallBurg(price, callories){
  this.name = "Small";
  this.price = price;
  this.callories = callories;
}

function MediumBurg(price, callories){
  this.name = "Medium";
  this.price = price;
  this.callories = callories;
}

function LargeBurg(price, callories){
  this.name = "Large";
  this.price = price;
  this.callories = callories;
}

function printBurg(hamburger){
    console.log(`
    Your Burger: ${hamburger.getType().name}
    Price: $${hamburger.getPrice()} 
    Callories: kcal ${hamburger.getCallories()}
    Additional topping(s): ${hamburger.getTopp()} `);
}

function Hamburger(type){
  let toppings = [];
  let callories = type.callories;
  let price = type.price;
  return {
    addTopping: (topping) => {
      callories = callories + topping.callories;
      price = price + topping.price;
      toppings.push(topping.name)
    },
    getCallories: () => {
      return callories;
    },
    getPrice: () => {
      return price;
    },
    getType: () => {
      return type;
    },
    getTopp: () => {
      return toppings;
    }
  }
};
  
function Cheese(price, callories){
  this.name = "Cheese";
  this.price = price;
  this.callories = callories;
}

function Salad(price, callories){
  this.name = "Salad";
  this.price = price;
  this.callories = callories;
}

function Potato(price, callories){
  this.name = "Potato";
  this.price = price;
  this.callories = callories;
}

function Spices(price, callories){
  this.name = "Spices";
  this.price = price;
  this.callories = callories;
}

function Mayo(price, callories){
  this.name = "Mayo";
  this.price = price;
  this.callories = callories;
}