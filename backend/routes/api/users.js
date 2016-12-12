var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../../models/User');
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/user', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user) {
    if(!user) {
      return res.sendStatus(401);
    }

    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

router.put('/user', auth.required, function(req, res, next) {
  console.log(req);
  User.findById(req.payload.id).then(function(user) {
    if(!user) {
      return res.sendStatus(401);
    }

    if(typeof req.body.user.djName !== 'undefined') {
      user.djName = req.body.user.djName;
    }

    if(typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }

    if(typeof req.body.user.region !== 'undefined') {
      user.region = req.body.user.region;
    }

    if(typeof req.body.user.price !== 'undefined') {
      user.price = req.body.user.price;
    }

    if(typeof req.body.user.genres !== 'undefined') {
      user.genres = req.body.user.genres;
    }

    if(typeof req.body.user.biography !== 'undefined') {
      user.biography = req.body.user.biography;
    }

    if(typeof req.body.user.references !== 'undefined') {
      user.references = req.body.user.references;
    }

    return user.save().then(function() {
      return res.json({user: user.toAuthJSON()});
    }).catch(next);
});
});
router.post('/users/login', function(req, res, next){
  if(!req.body.user.email) {
    return res.status(422).json({errors: {email: "Gelieve een e-mail adres op te geven"}});
  }

  if(!req.body.user.password) {
    return res.status(422).json({errors: {password: "Gelieve een wachtwoord op te geven"}});
  }

  passport.authenticate('local', {session: false}, function(err, user, info){
    if(err) {
      return next(err);
    }

    if(user) {
    //  console.log(user);
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.post('/users', function(req, res, next) {
  var user = new User();

  console.log(req.body);

  user.email = req.body.email;
  user.setPassword(req.body.password);
  user.firstName = req.body.firstName;
  user.name = req.body.name;
  user.djName = req.body.djName;
  user.region = req.body.region;
  user.price = req.body.price;
  user.genres = req.body.genres;
  user.image = req.body.image;

  if(typeof req.body.biography !== 'undefined') {
    user.biography = req.body.biography;
  }

  if(typeof req.body.references !== 'undefined') {
    user.references = req.body.references;
  }

  user.save().then(function() {
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
