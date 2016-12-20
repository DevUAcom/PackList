(function () {
	'use strict';

	angular
        .module('app')
        .controller('EditItemController', EditItemController);

	EditItemController.$inject = [];
	function EditItemController() {
		var vm = this;

		vm.$onInit = onInit;
		vm.save = save;
		vm.cancel = cancel;

		function save() {
			vm.close({ $value: vm.item });
		}

		function cancel() {
			vm.dismiss();
		}

		function onInit() {
			vm.item = angular.copy(vm.resolve.item);
		}
	}
})();
