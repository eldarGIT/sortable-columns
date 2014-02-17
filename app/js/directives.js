'use strict';

/* Directives */

angular.module('directives', []).
  directive('widget', [function() {
	return {
		compile: function compile(templateElement, templateAttrs) {
			templateElement.html("<p>Hello</p>");
		},
		link: function($scope, element, attrs) {
			
		}
	}
  }]);
