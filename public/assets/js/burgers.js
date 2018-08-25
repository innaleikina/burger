$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burger").val().trim(),
        devoured: false
    };

    //on click of create form submit a new burger is posted to the database
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
    //on click of devour grab the id 
    var id = $(this).data("id");
    //on click of devour grab the state of devoured
    var devoured = $(this).data("devoured");
    console.log(id);
    //api route uses id, so we can reference it as req.params.id in burgers_controller
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
    }).then(
        function () {
            console.log("update quote with id: " + id);
        })
    
    //remove the devoured burger from left list
    $(this).hide()
    console.log(devoured);

    //front end handling of moving burger from one list to another
    var item = $(this).parent();
    $("undevoured").remove(item)
    $('.devoured').append(item);
})