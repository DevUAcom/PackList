(function () {
	'use strict';

	angular
        .module('app')
        .controller('ItemComponentController', ItemComponentController);

	ItemComponentController.$inject = [];
	function ItemComponentController() {
		var vm = this;
		vm.editMode = false;
		vm.itemName = "";

		vm.beginEdit = beginEdit;
		vm.cancelEdit = cancelEdit;

		function beginEdit() {
			vm.itemName = vm.item.name;
			vm.editMode = true;
		}

		function cancelEdit() {
			vm.editMode = false;
		}
	}
})();
