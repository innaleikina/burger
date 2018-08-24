var connection = require("./connection.js");

var orm = {
    selectAll: selectAll,
    insertOne: insertOne,
    // updateALl: updateAll
}

function selectAll(tableName, cb) {
    queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function (err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
    })
}

function insertOne(tableName, colName, vals, cb) {
    var queryString = "INSERT INTO ?? (?? , ??) VALUE (?) )";
    connection.query(queryString, tableName, colName, vals, function (err, result) {
        if (err) {
            throw err;
        }
       cb(result);
    })
}

// function insertOne(){

// }

module.exports = orm;