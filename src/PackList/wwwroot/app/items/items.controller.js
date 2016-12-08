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
		vm.deleteItem = deleteItem;

		function createItem(newItem) {
			ItemsService.createItem(newItem)
				.then(addNewItemToList);
		}

		function addNewItemToList(item) {
			vm.items.push(item);
		}

		function deleteItem(item) {
			ItemsService.deleteItem(item.itemId)
				.then(removeItemFromList(item));
		}

		function removeItemFromList(item) {
			var itemIndex = vm.items.indexOf(item);
			vm.items.splice(itemIndex, 1);
		}

	}
})();
