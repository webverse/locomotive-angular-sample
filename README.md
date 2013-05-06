
  <h2>Working with nodejs, mongodb, mvc and stuff.</h2>  

	This is a simple example of how to use locomotivejs with mongoose ejs, angularjs and twitter bootstrap.

	Under development/test. 

	@author
	Fabio Favero Henkes
	_______________________________________________________________

	Info.:

	1 - Be sure you have mongodb up and running.

	2 - git clone https://github.com/webverse/locomotive-angular-sample.git

	3 - Install locomotive as global if you not already have it. 

		$ npm install locomotive -g

	4 - Change 'db-uri' at /../config/enviroments/development.js to your own mongodb uri.

	5 - Change the secret key and consumer key for twitter at /../config/initializers/02_passport.js to your own twitter api data.

	6 - Run the follow commands:

		$ npm install

		$ lcm server

	7 - Open in a browser: http://localhost:3000/

	8 - Mezmerize yourself!

	Obs: In order to the twitter authentication example work, are required an registered app at https://dev.twitter.com/