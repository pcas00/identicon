'use strict';

// Declare app level module which depends on filters, and services

var identiconApp = angular.module('identiconApp', [
	'ngRoute',
	'identiconControllers',
	'identiconDirectives'
]);


identiconApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/html5', {templateUrl: 'static/partials/html5.html', controller: 'IdenticonCtrl'});
  $routeProvider.when('/gravatar', {templateUrl: 'static/partials/gravatar.html', controller: 'IdenticonCtrl'});
  $routeProvider.when('/generate', {templateUrl: 'static/partials/generate-identicon.html', controller: 'GenerateIdenticonCtrl'});
  $routeProvider.otherwise({redirectTo: '/html5'});
}]);
