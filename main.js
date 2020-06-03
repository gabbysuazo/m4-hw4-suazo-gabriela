var pizza = {
  crust: "Thin",
  cheese: "Mozzarella",
  sauce: "White",
  addToppings: "Please add pepperoni and sausage"
};

console.log(pizza.addToppings);

function orderPizza (){
  console.log(pizza.crust);
  console.log(pizza.cheese);
  console.log(pizza.sauce);
  console.log(pizza.addToppings);
};

orderPizza();
