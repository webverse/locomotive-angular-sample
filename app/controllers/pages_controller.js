var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

var Product = require('../models/product');

PagesController.main = function() {
	// console.log('############ pages_controller.js :: main #############');
  this.title = 'Locomotive / Angular / Sample code'
  this.render();
}

PagesController.list = function() {
	// console.log('############ pages_controller.js :: list #############');   

    var self = this;

    Product.find({}, function(err, docs){
        // console.log('############ pages_controller.js :: mongoose callback #############');
        // console.log(docs);                       
        self.res.json(docs)
        
    }); 
}

PagesController.create = function() {	
	// console.log('############ pages_controller.js :: create #############');
 //  console.log(this.req);

  var self = this;

	var product = new Product(this.req.body); 
	
    product.save(function(err, product) {
        //console.log('############ pages_controller.js :: mongoose create callback #############');
        if (err) // TODO handle the error
        	console.log('############ err #############');

        self.redirect('/');
    }); 

}

module.exports = PagesController;