var orm = require("../config/orm.js");

var burger_modal = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(colName, vals, cb){
      orm.inserOne("burgers",colName, vals, function(res){
        cb(res);
      })
    }
}

// orm.selectAll("burgers","burger_name", function(result){
//     console.log(result);
// });


  // Export the database functions for the controller (catsController.js).
module.exports = burger_modal;