(function () {
	'use strict';

	angular
        .module('app')
        .controller('AddItemController', AddItemController);

	AddItemController.$inject = ['ItemsService'];
	function AddItemsontroller(ItemsService) {
		var vm = this;
		

		vm.createItem = createItem;

	  function createItem(item) {
	    vm.
	  }
	}
})();
