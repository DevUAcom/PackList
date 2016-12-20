describe('ItemsSevice', function ()
{

	beforeEach(function () {
		bard.appModule('app');
		bard.inject(this, '$httpBackend', 'ItemsService', 'ApiBase');
	});

	it('should rerurn items list', function () {
		$httpBackend.whenGET(ApiBase + '/item').respond(["Item1", "Item2"]);

		ItemsService.getItems().then(function(response) {
			expect(response).toEqual(["Item1", "Item2"]);
		});

		$httpBackend.flush();
	});

	it('should create item', function () {
		$httpBackend.expectPOST(ApiBase + '/item', { "Name": "Item1" }).respond({ "Name": "Item1" });

		ItemsService.createItem({ "Name": "Item1" }).then(function (response) {
			expect(response).toEqual({ "Name": "Item1" });
		});

		$httpBackend.flush();
	});

	it('should update item', function () {
		$httpBackend.expectPUT(ApiBase + '/item', { "id": 1, "Name": "Item1" }).respond({ "id": 1, "Name": "Item1" });

		ItemsService.updateItem({ "id": 1, "Name": "Item1" }).then(function (response) {
			expect(response).toEqual({ "id": 1, "Name": "Item1" });
		});

		$httpBackend.flush();
	});

	it('should delete item', function () {
		$httpBackend.expectDELETE(ApiBase + '/item/11').respond(204);

		ItemsService.deleteItem(11).then(function (response) {
			expect(response.status).toEqual(204);
		});

		$httpBackend.flush();
	});
});