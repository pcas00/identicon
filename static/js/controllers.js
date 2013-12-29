'use strict';

/* Controllers */

var identiconControllers = angular.module('identiconControllers', []);

identiconControllers.controller('IdenticonCtrl', function ($scope, $http) {
	$http.get('hash').success(function(data) {
		$scope.hash = data;
	});
});

identiconControllers.controller('GenerateIdenticonCtrl', function ($scope, $http) {
	//$scope.ipAddress = '';
	//$scope.hash = '';

	$scope.generateIdenticon = function(ipAddress) {
		$http.get('customhash?ipAddress='+ipAddress).success(function(data) {
			$scope.hash = data.hash;
		});
	}

});