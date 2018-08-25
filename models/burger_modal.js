var orm = require("../config/orm.js");

var burger_modal = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(vals, cb){
      orm.insertOne([vals, false ], function(res){
        cb(res);
      })
    },
    updateOne: function(vals,cb){
      orm.updateOne(vals,function(res){
        cb(res)
      })
    }
}

module.exports = burger_modal;