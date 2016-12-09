var mongoose = require('mongoose');
var random = require('mongoose-random');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var UserSchema = new mongoose.Schema({
//	email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
	email: String,
	hash: String,
	salt: String,
	firstName: String,
	name: String,
	djName: {type: String, unique: true, required: [true, 'Gelieve jouw dj naam op te geven']},
	region: {type: String, required: [true, 'Gelieve aan te geven uit welke regio je komt']},
	price: {type: Number, required: [true, 'Gelieve aan te geven hoeveel je per uur vraagt']},
	genres: [{type: String, ref:'Genre', required: [true, 'Gelieve minstens 1 genre aan te duiden']}],
	biography: String,
	references: [{type: String, ref: 'Reference'}],
	upvotes: {type: Number, default: 0},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

UserSchema.plugin(random, { path: 'r' });
UserSchema.plugin(uniqueValidator, {message: 'is reeds in gebruik'});

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    email: this.email,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function() {
	return {
		djName: this.djName,
		email: this.email,
		token: this.generateJWT(),
		region: this.region,
		price: this.price,
		biography: this.biography,
		genres: this.genres,
		references: this.references
	};
}

UserSchema.methods.toProfileJSONFor = function(user){
  return {
    djName: this.user.username,
    bio: this.user.bio,
    image: this.user.image,
		region: this.user.region,
		price: this.user.price,
		genres: this.user.genres,
		references: this.user.references
  };
};

UserSchema.methods.upvote = function(cb) {
	this.upvotes += 1;
	this.save(cb);
};

mongoose.model('User', UserSchema);
