(function () {
	'use strict';

	angular
        .module('app')
        .controller('AddItemController', AddItemController);

	AddItemController.$inject = ['ItemsService'];
	function AddItemController(ItemsService) {
		var vm = this;
		

		vm.createItem = createItem;

	  function createItem(item) {
	    //vm.
	  }
	}
})();
