'use strict';

/* Directives */

angular.module('identiconDirectives', []).
  directive('identiconDisplay', function($timeout) {
    return {
    	link: function(scope, elm, attrs) {
    		/*I think I need to timeout in order for Angular to compile HTML.
    		Without the timeout, the identicon5 jQuery will generate an identicon
    		for a blank hash.
    		*/
    		$timeout(function() {
    			angular.element(elm).identicon5({size:100});
    		}, 82);
    	}
    };
  });