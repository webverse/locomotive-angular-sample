
// locomotive controller

var locomotive = require('locomotive')
  , Controller = locomotive.Controller
  , passport = require('passport');

var AuthController = new Controller();

// request
AuthController.before('twitter', passport.authenticate('twitter'));

AuthController.twitter = function() {
  // does nothing, only a placeholder for the hook.

};

// callback
AuthController.before('callback', passport.authenticate('twitter', { failureRedirect: '/error' }));

AuthController.callback = function() {
  // This will only be called when authentication succeeded.
  this.redirect('/list');
};

module.exports = AuthController;