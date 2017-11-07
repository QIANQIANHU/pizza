//business logic
function Pizza(inputSize, inputTopping) {
  this.size = inputSize;
  this.topping = inputTopping;
  this.price = function() {

    var basicPrice = 3.99;

    if (this.size === "extra") {
      basicPrice += 2;
    }
    if (this.size === "large" || this.size === "medium") {
      basicPrice += 1;
    }
    if (this.topping.includes("cheese")) {
      basicPrice += 2;
    }
    if (this.topping.includes("pepperoni")) {
      basicPrice += 1;
    }
    if (this.topping.includes("artichoke")) {
      basicPrice += 2;
    }
    if (this.topping.includes("anchovy")) {
      basicPrice += 1;
    }
    return basicPrice;
  };
}

function resetResultsFields() {
  $("#pizza").text("");
  $("#totalPrice").text("");
};

// user interface logic
$(document).ready(function() {

  var pizzas = [];

  $("#add-pizza").click(function() {
    $(".boxmodel").show();
    var pizzaSize = $("#size").val();
    var pizzaToppings = [];
    $('input[type="checkbox"]:checked').each(function(index, elem) {
        pizzaToppings.push($(elem).val());
    });

    var newPizza = new Pizza(pizzaSize, pizzaToppings);
    pizzas.push(newPizza);
    resetResultsFields();

    for (i = 0; i < pizzas.length; i++) {
       var newPizzaContents = "";
       newPizzaContents += "Pizza " + (i+1).toString() + "<br><br>";
       newPizzaContents += "Size: " + pizzas[i].size + "<br>";
       newPizzaContents += "Toppings: " +  pizzas[i].topping.toString() + "<br>";
       newPizzaContents += "Price: " + pizzas[i].price() + " dollars." + "<br><br>";
       totalPrice += pizzas[i].price();
       $("#pizza").append(newPizzaContents);
    }
  });

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    resetResultsFields();

    var totalPrice = 0.0;

    for (i = 0; i < pizzas.length; i++) {
       var newPizzaContents = "";
       newPizzaContents += "Pizza " + (i+1).toString() + "<br><br>";
       newPizzaContents += "Size: " + pizzas[i].size + "<br>";
       newPizzaContents += "Toppings: " +  pizzas[i].topping.toString() + "<br>";
       newPizzaContents += "Price: " + pizzas[i].price() + " dollars." +"<br><br>";
       totalPrice += pizzas[i].price();
       $("#pizza").append(newPizzaContents);
    }

    $("#words").show();
    $("#totalPrice").text(totalPrice.toString()+ " dollars.");
  });
});
