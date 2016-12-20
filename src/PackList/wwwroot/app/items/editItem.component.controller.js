(function () {
	'use strict';

	angular
        .module('app')
        .controller('EditItemComponentController', EditItemComponentController);

	EditItemComponentController.$inject = ['$log'];
	function EditItemComponentController($log) {
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
