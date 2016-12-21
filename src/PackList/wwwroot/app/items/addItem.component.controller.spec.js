describe('AddItemComponentController' , function () {
	var AddItemComponentController;

	beforeEach(function () {
		bard.appModule('app');
		bard.inject('$componentController');
	});

	it('should call onAdd binding when adding new item', function () {
		var onAddSpy = jasmine.createSpy('onAdd');
		AddItemComponentController = $componentController('plAddItem', null, { onAdd: onAddSpy });

		var newItem = 'new item';
		AddItemComponentController.addItem(newItem);

		expect(onAddSpy).toHaveBeenCalledWith({item: {name: newItem} });
	});

	it('should clear model when call addItem', function () {
		var onAddSpy = jasmine.createSpy('onAdd');
		AddItemComponentController = $componentController('plAddItem', null, { onAdd: onAddSpy });

		AddItemComponentController.name = 'new item';
		AddItemComponentController.addItem();

		expect(AddItemComponentController.name).toEqual('');
	});
});