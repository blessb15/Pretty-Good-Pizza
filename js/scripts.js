//business
function Pizza(crust,sauce,toppings,Size) {
  this.Size = Size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}

Pizza.prototype.Order = function() {
  if (this.Size === "Personal"){
    return this.Size + " " + this.toppings + " " + "$3.00";
  }
  if (this.Size === "Small"){
    return this.Size + " " + this.toppings + " " + "$5.00";
  }
  if (this.Size === "Medium"){
    return this.Size + " " + this.toppings + " " + "$7.00";
  }
  if (this.Size === "Large"){
    return this.Size + " " + this.toppings + " " + "$10.00";
  }
}


//user
var userCrust = 0;
var userSauce = 0;
var userToppings = 0;
var userSize = 0;
var userName = 0;


$("#makePizza").submit(function(event){
  event.preventDefault();
  var userCrust = $("#Crust").val();
  var userSauce = $("#Sauce").val();
  var userToppings = $("#Top").val();
  var userSize = $("#Size").val();
  var newPizza = new Pizza(userCrust,userSauce,userToppings,userSize);
  $("#pizzaOutput").append("<li>" + newPizza.Order() + "</li>");
});
