describe('EditItemComponentController', function () {
	var EditItemComponentController;

	beforeEach(function () {
		bard.appModule('app');
		bard.inject('$componentController');
	});

	it('should copy vm.resolve.item when calling $onInit', function () {
		var item = { itemId: 1, itemName: 'Item' };
		EditItemComponentController = $componentController('plEditItem', null, { resolve: { item: item } });
		EditItemComponentController.$onInit();

		expect(EditItemComponentController.item).not.toBe(item);
		expect(EditItemComponentController.item).toEqual(item);
	});

	it('should call close binding when saving item', function () {
		var item = { itemId: 1, itemName: 'Item' };
		var closeSpy = jasmine.createSpy('close');

		EditItemComponentController = $componentController('plEditItem', null, { close: closeSpy, resolve: { item: item } });

		EditItemComponentController.$onInit();
		EditItemComponentController.save();

		expect(closeSpy).toHaveBeenCalledWith({ $value: item });
	});

});