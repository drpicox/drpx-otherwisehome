/*
	Automatically redirects all accesses to unknown url to '/'
*/
;(function(angular) {
	'use strict;'

	angular
		.module('drpxOtherwiseHome', ['ngRoute'])
		.config(otherwiseHomeConfig);

	otherwiseHomeConfig.$inject = ['$routeProvider'];
	function otherwiseHomeConfig  ( $routeProvider ) {

		$routeProvider.otherwise({
			redirectTo: '/',
		});
	}

})(angular);