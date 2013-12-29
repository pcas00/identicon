'use strict';

/* Controllers */

var identiconControllers = angular.module('identiconControllers', []);

identiconControllers.controller('IdenticonCtrl', function ($scope, $http) {
	$http.get('hash').success(function(data) {
		$scope.hash = data;
	});
});

identiconControllers.controller('GenerateIdenticonCtrl', function ($scope, $http) {
	/*$http.get('hash').success(function(data) {
		$scope.hash = data;
	});*/
	$scope.ipAddress = '';
	$scope.hash = '';

});