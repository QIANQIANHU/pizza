//business logic
function Pizza(inputSize, inputTopping) {
  this.size = inputSize;
  this.topping = inputTopping;
  this.price = function() {
    var basicPrice = 3;

    if (this.size === "extra") {
      basicPrice += 2;
    }
    if (this.size === "large" || this.size === "medium") {
      basicPrice += 1;
    }
    if (this.topping === "cheese") {
      basicPrice += 2;
    }
    if (this.topping === "pepperoni") {
      basicPrice += 1;
    }
    if (this.topping === "artichoke") {
      basicPrice += 2;
    }
    if (this.topping === "anchovy") {
      basicPrice += 1;
    }
    return basicPrice;
  };
}
/*
1. for each add pizza button click -> create a Pizza instance
2. push every pizza instance to pizzas array (global variable)
3. once you click "place your order", you iterate through [Pizza instance].
*/

function resetResultsFields() {
  $("#pizza").text("");
  $("#totalPrice").text("");
};

// user interface logic
$(document).ready(function() {

  //global variable to contain all pizza instances
  var pizzas = [];

  $("#add-pizza").click(function() {

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
       newPizzaContents += "Price: " + pizzas[i].price() + "<br><br>";
       totalPrice += pizzas[i].price();
       $("#pizza").append(newPizzaContents);
    }

    //$("#totalPrice").text(totalPrice.toString());

  });

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    resetResultsFields();

    /*
    ("#pizza").show();
    $("#size").text(pizzaSize);
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingSelected = $(this).val();
      $("#topping").append(toppingSelected + ", ");
    });
    $("#price").text(price);
    */

    var totalPrice = 0.0;

    for (i = 0; i < pizzas.length; i++) {
       var newPizzaContents = "";
       newPizzaContents += "Pizza " + (i+1).toString() + "<br><br>";
       newPizzaContents += "Size: " + pizzas[i].size + "<br>";
       newPizzaContents += "Toppings: " +  pizzas[i].topping.toString() + "<br>";
       newPizzaContents += "Price: " + pizzas[i].price() + "<br><br>";
       totalPrice += pizzas[i].price();
       $("#pizza").append(newPizzaContents);
    }

    $("#words").show();
    $("#totalPrice").text(totalPrice.toString());
    //resetFields();

  });
});
