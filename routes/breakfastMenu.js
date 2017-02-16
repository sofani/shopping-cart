var express = require('express');
var router = express.Router();
var Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err, docs, next) {
 
  var productChunks= [];
  var chunkSize = 4;
  // for (var i = 0; i < docs.length; i += chunkSize) {
  		productChunks.push(docs[0].breakfast);
           
  //}
  	 res.render('shop/breakfast', { title: 'Eritrean Resturant', breakfasts: productChunks});
  	
  });
 
});

module.exports = router;
