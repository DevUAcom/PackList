(function () {
	'use strict';

	angular
        .module('app')
        .service('LuggageService', LuggageService);

	LuggageService.$inject = ['$http', '$log', 'ApiBase'];
	function LuggageService($http, $log, ApiBase) {
		var service = this;

		service.getLuggage = getLuggage;

		function getLuggage() {
			return $http.get(ApiBase + "/luggage")
				.then(getLuggageComplete)
				.catch(getLuggageFailed);
		}

		function getLuggageComplete(response) {
			console.log(response);
			return response.data;
		}

		function getLuggageFailed(error) {
			$log.error("XHR Failed for getLuggage." + error.data);
		}

	}
})();