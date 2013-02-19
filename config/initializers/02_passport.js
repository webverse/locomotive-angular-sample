// passport-twitter 

var passport = require('passport')  
      , TwitterStrategy = require('passport-twitter').Strategy;

var TWITTER_CONSUMER_KEY = "<your consumer key here>";

var TWITTER_CONSUMER_SECRET = "<your consumer secret here>";

module.exports = function() {    

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });


    passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
      },
      function(token, tokenSecret, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {    

          return done(null, profile);
        });
      }
    ));
}   