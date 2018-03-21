const mysql= require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'NodeShopApp'
});

var getConnection = function (callback) {
  pool.getConnection(function (err, connection) {
      callback(err, connection);
  });
};

module.exports = getConnection;