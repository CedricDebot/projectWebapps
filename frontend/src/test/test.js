var expect = require('chai').expect;
var inject = require('angular-mocks');

describe('Homectrl', function() {
  var scope;
  var controller;

  beforeEach(function() {
    module('app')
  });

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.new();
    controller = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  describe('Check queryParams', function(){
    it('should return the correct string depending on what is in the form', function() {
      scope.formData({
        price: 90
      });
      assert.equal(scope.submitForm(), '?price=90');
    });
  });
});
