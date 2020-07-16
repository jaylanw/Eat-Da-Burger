var connection = require("../config/connection.js");

var orm = {
    
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
  insertOne: function(value, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  updateOne: function( id, cb) {
    var queryString = "UPDATE burgers SET devoured = 1 where id = ?";
    connection.query(queryString, id, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;