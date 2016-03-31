angular.module('babelrenting').directive('mediaItemList',
	function() {
		return {
			restrict: 'AE',
			scope: {
				model: '=items',
				getDetailUrl: '&',
				dateMode: '@'
			},
			templateUrl: 'views/mediaItemList.html'
		};
	}
);