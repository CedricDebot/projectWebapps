var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
var winston = require('winston');
//var config = require('./config-debug');

describe('Routing', function(){
  var url = 'http://localhost:3000/api';

  before(function(done) {
    mongoose.connect('mongodb://localhost/findYourDJ');
    done();
  });

  describe('Create Account', function() {
    it('should return error trying to save duplicate djName', function(done){
      var user = {
        email: 'cigoriousbooking@gmail.com',
        password: 'secret',
        firstName: 'Cedric',
        name: 'Debot',
        djName: 'Cigorious',
        region: 'Vlaams-Brabant',
        price: 30,
        genres: 'EDM'
    };

    request(url)
      .post('/users')
      .send({user : user})
      .end(function(err, res) {
        if (err) {
          throw err;
        }

        res.status.should.be.equal(422);
        done();
      });
    });
  });

  describe('Login', function() {
    it('should return error trying to login with a non-existing account', function(done) {
      var user = {
        email: 'ikbestaniet@gmail.com',
        password: 'ikbestaniet'
      };

      request(url)
        .post('/users/login')
        .send({user: user})
        .end(function(err, res) {
          if (err) {
            throw err;
          }

          res.status.should.be.equal(422);
          done();
        });
    });
  });

  describe('Profile', function() {
    it('should return 200 when trying to get an existing profile', function(done) {
      var djName= 'Cigorious';

      request(url)
        .get('/profiles/djs/djName/' + djName)
        .end(function(err, res){
          if (err) {
            throw err;
          }

          res.status.should.be.equal(200);
          done();
        });
    });
  });
});
