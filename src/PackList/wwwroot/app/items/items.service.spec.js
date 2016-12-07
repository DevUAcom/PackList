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
});