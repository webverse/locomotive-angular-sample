// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {

	this.root('pages#main');	   

	this.match('list/', 'pages#main');

	this.match('show/', 'pages#show');

	this.match('create/', 'pages#create', { via: 'POST' }); 

	this.match('auth/twitter/', 'auth#twitter');
	
	this.match('auth/twitter/callback/', 'auth#callback');

 }