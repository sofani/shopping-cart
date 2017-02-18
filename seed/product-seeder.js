var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://root:sofa@ds153659.mlab.com:53659/heroku_j8dpvmqm');
//mongoose.connect('localhost: 27017/shopping');
var products = [
   
   new Product({
        imagePath: '../images/menu-tile.jpg',
        title: 'Break Fast',
        breakfast: [
             {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1980,
                description: "CA"
            }
        
        ]
       
   }),
   
     new Product({
        imagePath: '../images/menu-tile.jpg',
        title: 'lunch',
        breakfast: [
             {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            }
        
        ]
       
   }),

    new Product({
        imagePath: '../images/menu-tile.jpg',
        title: 'dinner',
        breakfast: [
             {
                image: '../images/menu-tile.jpg',
                price: 1982,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1982,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1982,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1982,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1982,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1982,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1982,
                description: "CA"
            },
            {
                image: '../images/menu-tile.jpg',
                price: 1981,
                description: "CA"
            }
        
        ]
       
   })

];




 var done = 0;
 for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
         done++;
         if (done === products.length) {
         	exit();
         }
    });
	
}

function exit() {
	mongoose.disconnect();
}









