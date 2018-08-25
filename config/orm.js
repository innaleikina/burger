var connection = require("./connection.js");

var orm = {
    selectAll: selectAll,

    insertOne: insertOne,
    updateOne: updateOne
}

function selectAll(tableName, cb) {
    queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function (err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
    })
}



function insertOne(vals, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUE (? , ?)";
    connection.query(queryString, vals, function (err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    })
}


function updateOne(vals, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id=?;"
    connection.query(queryString, vals, function (err, result) {
        if (err) throw err;
        cb(result);
    })
}

module.exports = orm;