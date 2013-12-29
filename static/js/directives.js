'use strict';

/* Directives */

angular.module('identiconDirectives', []).
  directive('identiconDisplay', function() {
    return function(scope, elm, attrs) {
    	angular.element(elm).identicon5({size:100});
    }
  });