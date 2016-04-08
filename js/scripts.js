//business
function Pizza(Name,crust,sauce,toppings,Size) {
  this.Size = Size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.Name = Name;
}

Pizza.prototype.Price = function() {
  if (this.Size === "Personal"){
    return this.Name + " " + this.toppings + " " + "$3.00";
  }
  if (this.Size === "Small"){
    return this.Name + " " + this.toppings + " " + "$5.00";
  }
  if (this.Size === "Medium"){
    return this.Name + " " + this.toppings + " " + "$7.00";
  }
  if (this.Size === "Large"){
    return this.Name + " " + this.toppings + " " + "$10.00";
  }
}


//user
var userCrust = $("#Crust").val();
var userSauce = $("#Sauce").val();
var userToppings = $("#Top").val();
var userSize = $("#Size").val();
var userName = $("#Size").val();


$("#makePizza").submit(function(event){
  var userCrust = $("#Crust").val();
  var userSauce = $("#Sauce").val();
  var userToppings = $("#Top").val();
  var userSize = $("#Size").val();
  event.preventDefault();
  var newPizza = new Pizza(userName,userCrust,userSauce,userToppings,userSize);
  $("#pizzaOutput").append("<li>" + newPizza.Price() + "</li>");
});
