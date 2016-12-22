describe('ItemsController', function () {
	beforeEach(bard.appModule('app'));

	describe('CRUD', function () {
		var ItemsController;
		var newItem = { "Name": "Item1" };

		beforeEach(function () {
			bard.inject(function ($controller, ItemsService, $q) {
				bard.mockService(ItemsService, {
					createItem: $q.when(newItem),
					deleteItem: $q.when()
				});

				ItemsController = $controller('ItemsController', { itemsList: [] });
			});
		});

		it('should create new item', inject(function ($rootScope) {
			ItemsController.createItem(newItem);
			$rootScope.$apply();
			expect(ItemsController.items.length).toEqual(1);
			expect(ItemsController.items[0]).toEqual(newItem);
		}));

		it('should delete item', inject(function ($rootScope) {
			ItemsController.items = [{ itemId: 11, name: "Item1" }, { itemId: 22, name: "Item2" }, { itemId: 33, name: "Item3" }];
			var itemToDelete = ItemsController.items[1];
			ItemsController.deleteItem(itemToDelete);
			$rootScope.$apply();
			expect(ItemsController.items.length).toEqual(2);
			expect(ItemsController.items[0].itemId).toEqual(11);
			expect(ItemsController.items[1].itemId).toEqual(33);
		}));

		it('should not delete not existing item', function () {
			ItemsController.items = [{ itemId: 11, name: "Item1" }, { itemId: 22, name: "Item2" }, { itemId: 33, name: "Item3" }];
			var itemToDelete = { itemId: -1, name: "Item-1" };
			ItemsController.deleteItem(itemToDelete);
			expect(ItemsController.items.length).toEqual(3);
		});
	});

	describe('Category', function () {
		var ItemsController;

		beforeEach(function () {
			bard.inject(function ($controller, CategoriesService) {
				bard.mockService(CategoriesService, {
					getCategories: [
						{ categoryId: 1, name: 'category1' },
						{ categoryId: 2, name: 'category2' },
						{ categoryId: 3, name: 'category3' }
					]
				});

				ItemsController = $controller('ItemsController', { itemsList: [] });
			});
		});

		it('should return category name by id', function () {
			var categoryName = ItemsController.getCategoryNameById(2);
			expect(categoryName).toEqual('category2');
		});

		it('should return empty category name by id', function () {
			var categoryName = ItemsController.getCategoryNameById(22);
			expect(categoryName).toEqual('');
		});
	});

});