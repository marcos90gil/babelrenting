angular.module('babelrenting').directive('mediaItemList',
	function() {
		return {
			restrict: 'AE',
			scope: {
				model: '=items',
				getDetailUrl: '&',
				dateMode: '@'
			},
			templeteUrl: 'views/mediaItemList.html'
		};
	}
);