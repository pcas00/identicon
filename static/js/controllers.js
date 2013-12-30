'use strict';

/* Controllers */

var identiconControllers = angular.module('identiconControllers', []);

identiconControllers.controller('IdenticonCtrl', function ($scope, $http) {
	$http.get('hash').success(function(data) {
		$scope.hash = data.hash;
		$scope.ipAddress = data.ipAddress;
	});
});

identiconControllers.controller('GenerateIdenticonCtrl', function ($scope, $http) {
	$scope.generateIdenticon = function(ipAddress) {
		$http.get('customhash?ipAddress='+ipAddress).success(function(data) {
			$scope.hash = data.hash;
		});
	}

});