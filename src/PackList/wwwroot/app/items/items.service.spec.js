describe('ItemsSevice', function ()
{
	var $httpBackend;
	var itemsService;
	var ApiBase;

	beforeEach(module('app'));

	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		itemsService = $injector.get('ItemsService');
		ApiBase = $injector.get('ApiBase');
	}));


	it('should rerurn items list', function () {
		$httpBackend.whenGET(ApiBase + '/item').respond(["Item1", "Item2"]);

		itemsService.getItems().then(function(response) {
			expect(response).toEqual(["Item1", "Item2"]);
		});

		$httpBackend.flush();
	});

	it('should create item', function () {
		$httpBackend.expectPOST(ApiBase + '/item', { "Name": "Item1" }).respond({ "Name": "Item1" });

		itemsService.createItem({ "Name": "Item1" }).then(function (response) {
			expect(response).toEqual({ "Name": "Item1" });
		});

		$httpBackend.flush();
	});
});