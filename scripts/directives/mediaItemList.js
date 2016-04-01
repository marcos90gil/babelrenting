angular.module('babelrenting').directive('mediaItemList',
	function() {
		return {
			restrict: 'AE',
			scope: {
				model: '=items',
				getDetailUrl: '&',
				saveRenter: '&',
				dateMode: '@'
			},
			templateUrl: 'views/mediaItemList.html'
		};
	}
);