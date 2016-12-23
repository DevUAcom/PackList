(function () {
	'use strict';

	angular
        .module('app')
        .controller('ItemsComponentController', ItemsComponentController);

	ItemsComponentController.$inject = ['CategoriesService'];
	function ItemsComponentController(CategoriesService) {
		var vm = this;
		vm.getCategoryNameById = getCategoryNameById;
		vm.$onInit = $onInit;

		var categories = [];

		function $onInit() {
			CategoriesService.getCategories().then(function (data) {
				categories = data;
			});
		}

		function getCategoryNameById(categoryId) {
			var category = categories.find(function (category) {
				return category.categoryId === categoryId;
			});
			return category ? category.name : '';
		}

	}
})();
