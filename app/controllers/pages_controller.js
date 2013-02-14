

// locomotive controller

var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

var Product = require('../models/product');

PagesController.main = function() {
	this.title = 'Locomotive / Angular / Sample code'
  this.render();
}

PagesController.show = function() {
	  var self = this;

    Product.find({}, function(err, docs){
        self.res.json(docs)
        
    }); 
}

PagesController.create = function() {	

  var self = this;

	var product = new Product(this.req.body); 
	
    product.save(function(err, product) {       
        if (err) // TODO handle the error
        	console.log('############ err #############');

        self.redirect('/');
    }); 

}

module.exports = PagesController;