(function () {
	'use strict';

	angular
        .module('app')
        .controller('ItemsController', ItemsController);

	ItemsController.$inject = ['itemsList', 'ItemsService'];
	function ItemsController(itemsList, ItemsService) {
		var vm = this;
		vm.items = itemsList;
		
		vm.createItem = createItem;

		function createItem(newItem) {
			ItemsService.createItem(newItem)
				.then(addNewItemToList);
		}

		function addNewItemToList(item) {
			vm.items.push(item);
		}
	}
})();
