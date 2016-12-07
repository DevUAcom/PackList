(function () {
	'use strict';

	angular
        .module('app')
        .controller('AddItemController', AddItemController);

	AddItemController.$inject = [];
	function AddItemController() {
		var vm = this;
		

		vm.addItem = addItem;

		function addItem(itemName) {
			vm.onAdd({ item: { name: itemName } });
			vm.name = '';
	  }
	}
})();
