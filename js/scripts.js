//business logic
function Pizza(size, topping, price) {
  this.size = size;
  this.topping = [];
  this.price = 3;
}

// user interface logic
$(document).ready(function() {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();
    ("#pizza").show();
    var pizzaSize = $("#size").val();
    var pizzaTopping = $("input:checkbox[name=topping]:checked").val();

    var price = 3;

    if (pizzaSize === "extra") {
      price += 2;
    }
    if (pizzaSize === "large" ||pizzaSize === "medium") {
      price += 1;
    }
    if (pizzaTopping === "cheese") {
      price += 2;
    }
    if (pizzaTopping === "pepperoni") {
      price += 1;
    }
    if (pizzaTopping === "artichoke") {
      price += 2;
    }
    if (pizzaTopping === "anchovy") {
      price += 1;
    }

    $("#size").text(pizzaSize);
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingSelected = $(this).val();
      $("#topping").append(toppingSelected + ", ");
    });
    $("#price").text(price);

    resetFields();

  });
});
