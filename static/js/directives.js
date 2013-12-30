'use strict';

/* Directives */

angular.module('identiconDirectives', []).
  directive('identiconDisplay', function($timeout) {
    return {
    	restrict: 'A',
    	link: function(scope, elm, attrs) {
    		/*Watch for changes to hash model in scope and
    		  change identicon.
    		*/
    		scope.$watch('hash', function(newVal, oldVal) {
    			if (newVal != oldVal) {
    				elm.identicon5({size:100, hash:newVal});
    			}
 
    		});
    	}
    };
  });