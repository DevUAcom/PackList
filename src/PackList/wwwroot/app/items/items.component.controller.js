(function () {
	'use strict';

	angular
        .module('app')
        .controller('ItemsComponentController', ItemsComponentController);

	ItemsComponentController.$inject = ['CategoriesService'];
	function ItemsComponentController(CategoriesService) {
		var vm = this;
		vm.getCategoryNameById = getCategoryNameById;
		vm.categories = [];
		vm.$onInit = $onInit;

		function $onInit() {
			CategoriesService.getCategories().then(function (data) {
				vm.categories = data;
			});
		}

		function getCategoryNameById(categoryId) {
			var category = vm.categories.find(function (category) {
				return category.categoryId === categoryId;
			});
			return category ? category.name : '';
		}

	}
})();
