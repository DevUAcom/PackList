(function () {
	'use strict';

	angular
        .module('app')
        .controller('ItemsController', ItemsController);

	ItemsController.$inject = ['itemsList', 'ItemsService', 'CategoriesService', '$uibModal', '$log'];
	function ItemsController(itemsList, ItemsService, CategoriesService, $uibModal, $log) {
		var vm = this;
		vm.items = itemsList;
		
		vm.createItem = createItem;
		vm.deleteItem = deleteItem;
		vm.editItem = editItem;
		//vm.saveItem = saveItem;
		vm.getCategoryNameById = getCategoryNameById;

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

		function editItem(item) {
			var modalInstance = $uibModal.open({
				component: 'plEditItem',
				resolve: {
					item: function () {
						return item;
					}
				}
			});

			modalInstance.result.then(function (editedItem) {
				item.name = editedItem.name;
				item.category = editedItem.category;

				saveItem(item);
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		}

		function saveItem(item) {
			ItemsService.updateItem(item);
		}

		function removeItemFromList(item) {
			var itemIndex = vm.items.indexOf(item);
			if(itemIndex !== -1) {
				vm.items.splice(itemIndex, 1);
			}
		}

		function getCategoryNameById(categoryId) {
			var categories = CategoriesService.getCategories();
			var category = categories.find(function (category) {
				return category.categoryId === categoryId;
			});
			return category ? category.name : '';
		}
	}
})();
