angular.module('babelrenting').directive('mediaItem', function() {
	return {
		restrict: 'AE',
		templateUrl: 'views/mediaItem.html',
		scope: {
			model: '=item',
			user: '=',
			trustSrc: '&'
		}
	};
});