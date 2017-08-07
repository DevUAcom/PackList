(function () {
    'use strict';

    angular
        .module('bags')
        .service('BagsService', BagsService);

    BagsService.$inject = ['$http', '$log', 'ApiBase'];
    function BagsService($http, $log, ApiBase) {
    	var service = this;

    	service.getBags = getBags;

    	// getBags
    	function getBags() {
    		return $http.get(ApiBase + '/bag')
				.then(getBagsComplete)
				.catch(getBagsFailed);
    	}
	    function getBagsComplete(response) {
	    	return response.data;
	    }
	    function getBagsFailed(error) {
	    	$log.error("XHR Failed for getBags." + error.data);
	    }
    }
})();