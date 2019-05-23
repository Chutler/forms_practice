$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetAddressInput= $("input#streetAddress").val();
    var favoriteFoodInput = $("input#favoriteFood").val();
    var musicInput = $("input#music").val();
    var birthDayInput = $("input#birthDay").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".favoriteFood").text(favoriteFoodInput);
    $(".music").text(musicInput);
    $(".birthDay").text(birthDayInput);

    $("#story").show();

    event.preventDefault();
  });
});
