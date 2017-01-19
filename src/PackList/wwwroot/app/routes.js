(function () {
	'use strict';

	angular.module('app')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', { url: '/', template: '<h1>Dashboard</h1>' })
			// Luggage
			.state('luggage',
			  {
		  		url: '/luggage',
		  		templateUrl: 'app/luggage/luggage.template.html',
		  		controller: 'LuggageController as luggageCtrl',
		  		resolve: {
		  			luggageList: [
					  'LuggageService', function (LuggageService) {
				  		return LuggageService.getLuggage();
					  }
		  			]
		  		}
			  })
			// Items
			.state('items', {
				url: '/items',
				templateUrl: 'app/items/items.template.html',
				controller: 'ItemsController as itemsCtrl',
				resolve: {
					itemsList: [
					  'ItemsService', function (ItemsService) {
				  		return ItemsService.getItems();
					  }
					]
				}
			});
	}

})();