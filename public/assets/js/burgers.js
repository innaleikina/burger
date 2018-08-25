$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burger").val().trim(),
        devoured: false
    };
    // console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    console.log(id);
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
    }).then(
        function () {
            console.log("update quote with id: " + id);
        })

    $(this).data("devoured", 1);
    $(this).hide()
    console.log(devoured);
    if (devoured == 1) {
        $(this).parent().css("color", "blue");
        $(this).hide()
    }

    var item =  $(this).parent();
    $("undevoured").remove(item)
    $('.devoured').append(item);
})


