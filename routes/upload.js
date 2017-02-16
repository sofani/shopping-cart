var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
// var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/test');
// var Schema = mongoose.Schema;

var userDataSchema = new Schema({
 //imagePath: {data: Buffer, contentType: String},
  title: {type: String, required: true},
  content: String,
  author: String
}, {collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/upload');
});

router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('shop/upload', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
  // var item = {
  //   title: req.body.title,
  //   content: req.body.content,
  //   author: req.body.author,
   
  // };
  var item = new UserData();

  item.title = req.body.title;
  item.content =  req.body.content;
  item.author = req.body.author;
  //item.imagePath.data = fs.readFileSync(req.files.imagePath)
  //item.imagePath.contentType = 'image/png';
  
  //var data = new UserData(item);
  item.save();

  res.redirect('/upload');
});

router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();
  })
  res.redirect('/upload');
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/upload');
});

module.exports = router;