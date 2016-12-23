describe('ItemsComponentController', function () {
	beforeEach(bard.appModule('app'));

	describe('Category', function () {
		var ItemsComponentController;

		beforeEach(function () {
			bard.inject(function ($controller, $q, $rootScope, CategoriesService) {
				bard.mockService(CategoriesService, {
					getCategories: $q.when([
						{ categoryId: 1, name: 'category1' },
						{ categoryId: 2, name: 'category2' },
						{ categoryId: 3, name: 'category3' }
					])
				});

				ItemsComponentController = $controller('ItemsComponentController', { itemsList: [] });
			});
		});

		it('should return category name by id', function () {
			ItemsComponentController.$onInit();
			$rootScope.$apply();
			var categoryName = ItemsComponentController.getCategoryNameById(2);
			expect(categoryName).toEqual('category2');
		});

		it('should return empty category name by id', function () {
			ItemsComponentController.$onInit();
			$rootScope.$apply();
			var categoryName = ItemsComponentController.getCategoryNameById(22);
			expect(categoryName).toEqual('');
		});
	});

});