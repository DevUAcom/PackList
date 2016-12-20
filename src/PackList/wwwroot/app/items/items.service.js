(function () {
	'use strict';

	angular
        .module('app')
        .service('ItemsService', ItemsService);

	ItemsService.$inject = ['$http', '$log', 'ApiBase'];
	function ItemsService($http, $log, ApiBase) {
		var service = this;

		service.getItems = getItems;
		service.createItem = createItem;
		service.updateItem = updateItem;
		service.deleteItem = deleteItem;


		// getItems
		function getItems() {
			return $http.get(ApiBase + "/item")
				.then(getItemsComplete)
				.catch(getItemsFailed);
		}
		function getItemsComplete(response) {
			return response.data;
		}
		function getItemsFailed(error) {
			$log.error("XHR Failed for getItems." + error.data);
		}

		// createItem
		function createItem(item) {
			return $http.post(ApiBase + "/item", item)
				.then(createItemComplete)
				.catch(createItemFailed);
		}
		function createItemComplete(response) {
			return response.data;
		}
		function createItemFailed(error) {
			$log.error("XHR Failed for createItem." + error.data);
		}

		// updateItem
		function updateItem(item) {
			return $http.put(ApiBase + "/item", item)
				.then(updateItemComplete)
				.catch(updateItemFailed);
		}
		function updateItemComplete(response) {
			return response.data;
		}
		function updateItemFailed(error) {
			$log.error("XHR Failed for updateItem." + error.data);
		}

		// deleteItem
		function deleteItem(itemId) {
			return $http.delete(ApiBase + "/item/" + itemId)
				.catch(deleteItemFailed);
		}
		function deleteItemFailed(error) {
			$log.error("XHR Failed for deleteItem." + error.data);
		}

	}
})();