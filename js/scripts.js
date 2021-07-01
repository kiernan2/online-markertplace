$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    $("#output").text("Thank you " + name + " Your order is being sent to " + address)
  });
});
