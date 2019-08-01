
const fs = require('fs');
var mysqlConn = require("./database");

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};
//Task object constructor
var User = function(user) {
  this.EMAIL = user.EMAIL;
  this.NAME = user.NAME;
  this.DOB = user.DOB;
  this.ADDRESS = user.ADDRESS;
  this.CITY = user.CITY;
  this.POSTAL_CODE = user.POSTAL_CODE;
  this.SUBURB = user.SUBURB;
  this.CONTACT_NUMBER = user.CONTACT_NUMBER;
  this.P_AVAILABLE = user.P_AVAILABLE;
  this.P_USED = user.P_USED;
  this.CARBON_EMISSION = user.CARBON_EMISSION;
  this.PASSWORD = user.PASSWORD;
  this.CUSTOMER_CODE = user.CUSTOMER_CODE;
  this.SIGNUP_DATE = user.SIGNUP_DATE;
  this.APARTMENT_NAME = user.APARTMENT_NAME;
  this.UNIT_NUMBER = user.UNIT_NUMBER;
  this.COLLECTOR_ID = user.COLLECTOR_ID;
  this.COLL_DATE = user.COLL_DATE;
  this.CUSTOMER_ID = user.CUSTOMER_ID;
  
};


  User.createUser = (newUser, result) => {
    mysqlConn.query("INSERT INTO RG_CUSTOMER set ?", newUser, (err, res) => {
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
  mysqlConn.query("Select * from RG_CUSTOMER", function(err, res) {
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
  mysqlConn.query("Select * from RG_CUSTOMER where name = ?", userName, (err, res) => {
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
  mysqlConn.query("Select * from RG_CUSTOMER where CUSTOMER_ID = ? ", userId, (err,res) => {
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
  mysqlConn.query("DELETE FROM RG_CUSTOMER WHERE id = ?", userId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
