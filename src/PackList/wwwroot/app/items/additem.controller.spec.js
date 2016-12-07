describe('AddItemController' , function () {
	var $componentController;
	var AddItemController;

	beforeEach(module('app'));

	beforeEach(inject(function (_$componentController_) {
		$componentController = _$componentController_;
	}));

	it('should call onAdd binding when adding new item', function () {
		var onAddSpy = jasmine.createSpy('onAdd');
		AddItemController = $componentController('plAddItem', null, { onAdd: onAddSpy });

		var newItem = 'new item';
		AddItemController.addItem(newItem);

		expect(onAddSpy).toHaveBeenCalledWith({item: {name: newItem} });
	});

	it('should clear model when call addItem', function () {
		var onAddSpy = jasmine.createSpy('onAdd');
		AddItemController = $componentController('plAddItem', null, { onAdd: onAddSpy });

		AddItemController.name = 'new item';
		AddItemController.addItem();

		expect(AddItemController.name).toEqual('');
	});
});