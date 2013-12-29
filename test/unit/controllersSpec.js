'use strict';

/* jasmine specs for controllers go here */

describe('Identicon controllers', function(){
  
  beforeEach(module('identiconApp'));

  describe('IdenticonCtrl', function() {
  	var scope, ctrl, $httpBackend;

  	// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    	$httpBackend = _$httpBackend_;
    	$httpBackend.expectGET('hash').respond([{hash: '3a1250221cce746a2df7b8a97df7cc7d'}]);

    	scope = $rootScope.$new();
    	ctrl = $controller('IdenticonCtrl', {$scope: scope});
    }));

    it('should return a retrieve a hash fetch from xhr', function() {
    	expect(scope.hash).toBeUndefined();
    	$httpBackend.flush();

    	expect(scope.hash).toEqual([{hash: '3a1250221cce746a2df7b8a97df7cc7d'}]);
    });

  });
  
});
