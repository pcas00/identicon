'use strict';

/* Directives */

angular.module('identiconDirectives', []).
  directive('identiconDisplay', function() {
    return {
    	link: function(scope, elm, attrs, ngModel) {
    		angular.element(elm).identicon5({size:100});
    	}
    };
  });