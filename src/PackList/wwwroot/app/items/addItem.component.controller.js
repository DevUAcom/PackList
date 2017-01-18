(function () {
	'use strict';

	angular
        .module('app')
        .controller('AddItemComponentController', AddItemComponentController);

	AddItemComponentController.$inject = [];
	function AddItemComponentController() {
		var vm = this;
		
		vm.addItem = addItem;
		vm.$onInit = onInit;
		
		function onInit() {
		}

		function addItem(itemName, itemCategory) {
			vm.onAdd({ item: { name: itemName, categoryId: itemCategory.categoryId } });
			vm.name = '';
	  }
	}
})();
