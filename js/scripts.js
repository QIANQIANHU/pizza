//business logic
function Size(large, small) {
  this.largeSize = large;
  this.smallSize = small;
  this.Size = [];
}

function Topping(cheese, pepperoni, artichoke, anchovy) {
  this.cheese = cheese;
  this.pepperoni = pepperoni;
  this.artichoke = artichoke;
  this.anchovy = anchovy;
}

Size.prototype.fullSize = function() {
  return this.largeSize + " " + this.smallSize;
}

Topping.prototype.fullTopping = function() {
  return this.cheese + ", " + this.pepperoni + ", " + this.artichoke + ", " + this.anchovy;
}

function resetFields() {
    $("input#new-size-small").val("");
    $("input#new-size-large").val("");
    $("input.new-cheese").val("");
    $("input.new-pepperoni").val("");
    $("input.new-artichoke").val("");
    $("input.new-anchovy").val("");
}

// user interface logic
$(document).ready(function() {

  $("#new-topping").click(function() {
    $("#new-toppinges").append('<div class="new-topping">' +
                                 '<div class="form-group">' +
                                   '<label for="new-cheese">cheese</label>' +
                                   '<input type="text" class="form-control new-cheese">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-pepperoni">pepperoni</label>' +
                                   '<input type="text" class="form-control new-pepperoni">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-artichoke">artichoke</label>' +
                                   '<input type="text" class="form-control new-artichoke">' +
                                 '</div>' +
                               '</div>'
                             );
  });

  $("form#new-size").submit(function(event) {
    event.preventDefault();

    var inputtedLargeSize = $("input#new-size-small").val();
    var inputtedSmallSize = $("input#new-size-large").val();
    var newSize = new Size(inputtedLargeSize, inputtedSmallSize);

    $(".new-topping").each(function() {
      var inputtedCheese = $(this).find("input.new-cheese").val();
      var inputtedPepperoni = $(this).find("input.new-pepperoni").val();
      var inputtedArtichoke = $(this).find("input.new-artichoke").val();
      var inputtedAnchovy = $(this).find("input.new-artichoke").val();
      var newAddress = new Topping(inputtedCheese, inputtedPepperoni, inputtedArtichoke, inputtedAnchovy)
      newSize.topping.push(newTopping)
    });

    $("ul#size").append("<li><span class='contact'>" + newSize.fullSize() + "</span></li>");

    $(".contact").small().click(function() {
      $("#show-size").show();
      $("#show-size h2").text(newSize.fullSize());
      $(".large-size").text(newSize.largeSize);
      $(".small-size").text(newSize.smallSize);
      $("ul#topping").text("");
      newContact.toppings.forEach(function(topping) {
        $("ul#toppings").append("<li>" + topping.fullTopping() + "</li>");
      });
    });

    resetFields();

  });
});
