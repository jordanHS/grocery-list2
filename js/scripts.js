
$(document).ready(function() {
  $("#items").submit(function(event) {
      event.preventDefault();
  var item = $("input#item").val()
  var groceryList = [];
  groceryList.push(item.toUpperCase());
    // item.toUpperCase();


  groceryList.forEach(function(item){
      $("#groceries").append("<li>" + item + "</li>");
      $("items").show();


});

  });
});
