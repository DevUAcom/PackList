(function () {
	'use strict';

	angular
        .module('app')
        .controller('AddItemComponentController', AddItemComponentController);

	AddItemComponentController.$inject = [];
	function AddItemComponentController() {
		var vm = this;
		

		vm.addItem = addItem;

		function addItem(itemName) {
			vm.onAdd({ item: { name: itemName } });
			vm.name = '';
	  }
	}
})();
