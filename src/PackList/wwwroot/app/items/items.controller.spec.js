describe('ItemsController', function () {
	var ItemsController;
	var newItem = { "Name": "Item1" };

	beforeEach(bard.appModule('app'));

	beforeEach(function () { bard.inject(function ($controller, ItemsService, $q) {
		bard.mockService(ItemsService, {
			createItem: $q.when(newItem)
		});

		ItemsController = $controller('ItemsController', { itemsList: [] });
	})});

	it('should create new item', inject(function ($rootScope) {
		ItemsController.createItem(newItem);
		$rootScope.$apply();
		expect(ItemsController.items.length).toEqual(1);
		expect(ItemsController.items[0]).toEqual(newItem);
	}));

});