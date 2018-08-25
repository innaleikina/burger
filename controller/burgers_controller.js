var express = require("express");
var burger_modal = require("../models/burger_modal.js");
var router = express.Router();

router.get("/", function (req, res) {
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
        var hbsObject = {
            burgersTrue: trueArr,
            burgersFalse: falseArr

        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



router.post("/api/burgers", function (req, res) {
    // console.log(req.body);
    burger_modal.insertOne(req.body.name, function (result) {

        res.json({
            id: result.insertId
        });
    });
});

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

router.get("/api/burgers", function(req,res){
  burger_modal.selectAll(function(data){
      res.json(data);
  })
})

module.exports = router;