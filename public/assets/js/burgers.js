// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".changed-devoured").on("click", function(event) {
        event.preventDefault();

      var id = $(this).data("id");
      
      // var newSleep = $(this).data("newsleep");
  
      var isDevoured = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        function() {
          console.log("Your burger is now gurgling in your stomach!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".createBurger-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burger_name =  $('#newBurger-input').val().trim();
      // Set input to not be empty

      if (burger_name != "") {
        var newBurger = {
          burger_name: $('#newBurger-input').val().trim(),
          devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created", newBurger,"!");
          // Reload the page to get the updated list
          location.reload();
        });
    };
  });
});