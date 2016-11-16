(function () {
	'use strict';

	angular.module('app')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		//$urlRouterProvider.otherwise('/');

		$stateProvider
		  .state('home', { url: '/', template: '<a ui-sref="luggage">luggage</a><a ui-sref="luggage2">luggage2</a>' })
		  // Luggage
		  .state('luggage2',
		  {
		  	url: '/luggage2',
		  	templateUrl: 'app/luggage/luggage.template.html',
		  	controller: 'LuggageController as luggageCtrl',
		  	//resolve: {
		  	//	luggageList: [
			//	  'LuggageService', function (LuggageService) {
			//	  	console.log("resolve");
			//	  	return LuggageService.getLuggage();
			//	  }
		  	//	]
		  	//}
		  })
		.state('luggage',
		  {
		  	url: '/luggage',
		  	templateUrl: 'app/luggage/luggage.template.html',
		  	controller: 'LuggageController as luggageCtrl',
		  	resolve: {
		  		luggageList: [
				  'LuggageService', function (LuggageService) {
				  	console.log("resolve");
				  	return LuggageService.getLuggage();
				  }
		  		]
		  	}
		  });
		//// Items
		//.state('items', {
		//	url: '/{categoryShortName}/items',
		//	templateUrl: 'templates/items.template.html',
		//	controller: 'ItemsController as itemCtrl',
		//	resolve: {
		//		items: ['$stateParams', 'MenuDataService',
		//			function ($stateParams, MenuDataService) {
		//				return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
		//			}
		//		]
		//	}
		//});
	}

})();