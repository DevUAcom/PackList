describe('ItemsController', function () {
	var $controller;
	var ItemsController;
	var newItem = { "Name": "Item1" };

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_, ItemsService, $q) {
		$controller = _$controller_;

		spyOn(ItemsService, 'createItem').and.callFake(function () {
			var deferred = $q.defer();
			deferred.resolve(newItem);
			return deferred.promise;
		});

		ItemsController = $controller('ItemsController', { itemsList: [] });
	}));

	it('should create new item', inject(function ($rootScope) {
		ItemsController.createItem(newItem);
		$rootScope.$apply();
		expect(ItemsController.items.length).toEqual(1);
		expect(ItemsController.items[0]).toEqual(newItem);
	}));

});