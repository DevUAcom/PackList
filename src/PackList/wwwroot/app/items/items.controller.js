(function () {
	'use strict';

	angular
        .module('app')
        .controller('ItemsController', ItemsController);

	ItemsController.$inject = ['itemsList'];
	function ItemsController(itemsList) {
		var vm = this;
		vm.items = itemsList;
	}
})();
