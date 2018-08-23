var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    }
}

// orm.selectAll("burgers","burger_name", function(result){
//     console.log(result);
// });


  // Export the database functions for the controller (catsController.js).
module.exports = burger;