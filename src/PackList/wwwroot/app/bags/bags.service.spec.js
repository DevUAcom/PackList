describe('BagsService', function () {
	beforeEach(function () {
		bard.appModule('app', 'bags');
		bard.inject(this, '$httpBackend', 'BagsService', 'ApiBase');
	});

	it('should return bags list', function () {
		$httpBackend.whenGET(ApiBase + '/bag').respond(["bag1", "bag2"]);

		BagsService.getBags().then(function(response) {
			expect(response).toEqual(["bag1", "bag2"]);
		});

		$httpBackend.flush();
	});

});