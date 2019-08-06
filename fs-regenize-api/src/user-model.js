
const fs = require('fs');
var mysqlConn = require("./database");

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};
//Task object constructor
var User = function(user) {
  this.id = user.id;
  this.email = user.email;
  this.address = user.address;
  this.collector_id = user.collector_id;
  this.remali = user.remali;
  this.points = user.points;
  this.kg_recycled = user.kg_recycled;
  this.emissions = user.emissions;
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.photo = user.photo;
  this.type= user.type;
  this.collection_date = user.collection_date;
  this.password = user.password;
  this.suburb = user.suburb;
  this.postal_code = user.postal_code;
  this.city = user.city;
  
  
};


  User.createUser = (newUser, result) => {
    mysqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res.insertId);
        result(null, res.insertId);
        }
    });
};

User.findAllUsers = function(result) {
  mysqlConn.query("Select * from user", function(err, res) {
      if (err) {
      console.log("error: ", err);
      result(err, null);
      } else {
      console.log(res);
      result(null, res);
      }
  });
};

User.findUserByName = (userName, result) => {
  mysqlConn.query("Select * from user where name = ?", userName, (err, res) => {
      if (err) {
      console.log("error: ", err);
      result(err, null);
      } else {
      console.log(res);
      result(null, res);
      }
  });
};

User.getUserById = (userId, result) => {
  mysqlConn.query("Select * from user where id = ? ", userId, (err,res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.updateUserById = (userId, user, result) => {
  mysqlConn.query(
    "UPDATE user SET user = ? WHERE id = ?",
    [user, userId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

User.removeUser = (userId, result) => {
  mysqlConn.query("DELETE FROM user WHERE id = ?", userId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
