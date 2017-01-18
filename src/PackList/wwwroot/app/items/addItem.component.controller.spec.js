describe('AddItemComponentController', function () {
	var AddItemComponentController;

	beforeEach(function () {
		bard.appModule('app');
		bard.inject('$componentController');
	});

	it('should call onAdd binding when adding new item', function () {
		var onAddSpy = jasmine.createSpy('onAdd');
		AddItemComponentController = $componentController('plAddItem', null, { onAdd: onAddSpy });

		var newItem = 'new item';
		var itemCategory = { categoryId: 1 };
		AddItemComponentController.addItem(newItem, itemCategory);

		expect(onAddSpy).toHaveBeenCalledWith({ item: { name: newItem, categoryId: itemCategory.categoryId } });
	});

	it('should clear model when call addItem', function () {
		var onAddSpy = jasmine.createSpy('onAdd');
		AddItemComponentController = $componentController('plAddItem', null, { onAdd: onAddSpy });

		AddItemComponentController.name = 'new item';
		AddItemComponentController.addItem('item name', { categoryId: 1 });

		expect(AddItemComponentController.name).toEqual('');
	});
});