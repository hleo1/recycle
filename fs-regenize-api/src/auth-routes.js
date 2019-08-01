const express = require('express');
const router = express.Router();
const authService = require('./auth-service');

const User = require('./user-model');

router.post("/register", (req, res) => {
    authService.prototype
      .register(req.body)
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  //api.use api/auth/login
  
  router.post("/login", (req, res) => {
    authService.prototype.login(req.body)
      .then(user => {
        
        res.send(user);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err);
      });
  
  });

  router.get("/getUserByID", (req, res) => {
    authService.prototype.getUserByID(req.body)
      .then(user => {
        
        res.send(user);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err);
      });
  
  });

  
module.exports = router;