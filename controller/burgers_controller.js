var express = require("express");
var burger_modal = require("../models/burger_modal.js");
var router = express.Router();

//get route to select all burgers 
router.get("/", function (req, res) {
    //two arrays to separate true and false values
    var trueArr = [];
    var falseArr = [];

    burger_modal.selectAll(function (data) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].devoured == true) {
                trueArr.push(data[i])
            } else {
                falseArr.push(data[i])
            }
        }
        //make an object with two keys that hold separate true and false values
        var hbsObject = {
            burgersTrue: trueArr,
            burgersFalse: falseArr

        };
        // send the whole object to handlebars for rendering
        res.render("index", hbsObject);
    });
});


//post route for adding a new burger
router.post("/api/burgers", function (req, res) {
    burger_modal.insertOne(req.body.name, function (result) {
//only send the id over, since my mysql query only needs ids
        res.json({
            id: result.insertId
        });
    });
});

//update an item if burger has been devoured
router.put("/api/burgers/:id", function (req, res) {
    burger_modal.updateOne(req.params.id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

//api route
router.get("/api/burgers", function(req,res){
  burger_modal.selectAll(function(data){
      res.json(data);
  })
})

module.exports = router;