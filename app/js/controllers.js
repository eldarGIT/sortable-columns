'use strict';

/* Controllers */

angular.module('controllers', []).
  controller('appCtrl', ['$scope', function($scope) {
		$scope.rawScreens = [
			[{title: "Title 11", link: "link1"}, {title: "Title 12", link: "link2"}],
			[{title: "Title 21", link: "link1"}, {title: "Title 22", link: "link2"}],
		];
		$scope.sortableOptions = {
			placeholder: "app",
			connectWith: ".apps-container"
		};
  }]);