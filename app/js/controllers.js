'use strict';

/* Controllers */

angular.module('controllers', []).
  controller('appCtrl', ['$scope', '$compile', function($scope, $compile) {
		$scope.rawScreens = [
			[{title: "Item 11", link: "link1"}, {title: "Item 12", link: "link2"}],
			[{title: "Item 21", link: "link1"}, {title: "Item 22", link: "link2"}],
		];
		$scope.sortableOptions = {
			placeholder: "app",
			connectWith: ".apps-container"
		};
		
		$scope.addNewWidget = function() {
			$scope.rawScreens = [
				[{title: "Item 111", link: "link1"}, {title: "Item 112", link: "link2"}, {title: "Item 113", link: "link2"}],
				[{title: "Item 221", link: "link1"}, {title: "Item 222", link: "link2"}],
				[{title: "Item 221", link: "link1"}, {title: "Item 222", link: "link2"}],
			];
			console.log('add new widget');
			var el = angular.element('<div class="app ng-scope ng-binding" ng-repeat="app in screen">Title 13</div>')
			$('.widgets').append(el);
			$compile(el)($scope);
			//$('.widgets').append("<div widget>New widget</div>");
			return false;
		}
  }]);
