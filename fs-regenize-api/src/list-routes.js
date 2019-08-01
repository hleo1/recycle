const express = require('express');
const router = express.Router();
const Lists = require('./list-model');

router.post('/view', (req,res)=>{
    Lists.prototype.findUserById(req.body.CUSTOMER_ID).then(users=>{
        res.send(users);
    }).catch(err=>{
        res.send(err);
    });
  });

  module.exports = router;