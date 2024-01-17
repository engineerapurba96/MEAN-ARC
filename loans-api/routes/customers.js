var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const customerModel = require('../models/customers.model');

/* GET All customers listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//create new customer

router.post('/add', function(req, res, next) {
  res.send('respond with a resource');
});
//update existing customer
router.put('/update', function(req, res, next) {
  res.send('respond with a resource');
});

//deleteexisting customer

router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

//searc
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
