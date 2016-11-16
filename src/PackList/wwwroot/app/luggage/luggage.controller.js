(function () {
	'use strict';

	angular
        .module('app')
        .controller('LuggageController', LuggageController);

	LuggageController.$inject = ['luggageList'];
	function LuggageController(luggageList) {
		var vm = this;
		vm.luggage = luggageList;
		console.log(luggageList);
	}
})();
