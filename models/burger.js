var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (val, cb) {
        orm.insertOne("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },
    updateOne: function(colVal, condition, cb) {
        orm.updateOne( colVal, condition, function(res) {
          cb(res);
        });
      },
};

module.exports = burger;