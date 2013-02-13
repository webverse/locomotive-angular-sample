// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {

console.log('############ routes.js #############');
  this.root('pages#main');

  // this.get('list/', function(req, res) {
  //  	//console.log(req);
  //  	console.log('############ routes.js :: list #############');
  // // 	//res.json(req.locals.user);
  // });

this.match('list/', 'pages#list');    

this.match('create/', 'pages#create');    

  // this.match('about/', 'pages#about');      

 }

 /*
 module.exports = function routes() {
  this.root('account#new');
  this.resource('account');
  this.match('register', 'account#new', { via: 'get'});
  this.match('login', 'account#loginForm', { via: 'get' });
  this.match('login', 'account#login', { via: 'post' });
  this.match('logout', 'account#logout');
};
*/