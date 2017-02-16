var express = require('express');
var router = express.Router();
var Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err, docs, next) {
 
  var productChunks= [];
  var chunkSize = 4;
  // for (var i = 0; i < docs.length; i += chunkSize) {
  productChunks.push(docs[2].breakfast);
           
  //}
  	 res.render('shop/dinner', { title: 'Eritrean Resturant', dinners: productChunks});
  	
  });
 
});

module.exports = router;
