(function () {
	'use strict';

	angular
        .module('app')
        .service('CategoriesService', CategoriesService);

	CategoriesService.$inject = ['$http', '$log', 'ApiBase'];
	function CategoriesService($http, $log, ApiBase) {
		var service = this;
		service.getCategories = getCategories;

		var categories = null;

		function getCategories() {
			if (categories === null) {
				categories = $http.get(ApiBase + "/category")
					.then(getCategoriesComplete)
					.catch(getCategoriesFailed);
			}
			return categories;
		}
		function getCategoriesComplete(response) {
			return response.data;
		}
		function getCategoriesFailed(error) {
			$log.error("XHR Failed for getCategories." + error.data);
			return null;
		}

	}
})();