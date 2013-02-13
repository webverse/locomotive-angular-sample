var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

var Product = require('../models/product');

PagesController.main = function() {
	console.log('############ pages_controller.js :: main #############');
  this.title = 'Locomotive'
  this.render();
}

PagesController.list = function(req, res, next) {
	console.log('############ pages_controller.js :: list #############');

    this.title = "List";

    var self = this;

    Product.find({}, function(err, docs){
        console.log('############ pages_controller.js :: mongoose callback #############');
        console.log(docs);               
        //self.result = docs;
        self.res.json(docs)
        //self.render()
    }); 
}

PagesController.create = function() {	

	console.log('############ pages_controller.js :: create #############');

	var product = new Product();  

	product.id = 998;
	product.title = 'The Dark Knight';
	product.category = 'Blue ray';
	product.google_id = 8000;

	console.log(product);

  console.log(this.param);

	console.log('#########################');
	
    product.save(function(err, product) {
        console.log('############ pages_controller.js :: mongoose create callback #############');
        if (err) // TODO handle the error
        	console.log('############ err #############');
    }); 
}

module.exports = PagesController;