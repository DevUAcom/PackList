describe('CategoriesSevice', function () {

	beforeEach(function () {
		bard.appModule('app');
		bard.inject(this, '$httpBackend', 'CategoriesService', 'ApiBase');
	});

	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});


	it('should return categories list', function () {
		$httpBackend.expectGET(ApiBase + '/category').respond(["Category1", "Category2"]);

		CategoriesService.getCategories().then(function (response) {
			expect(response).toEqual(["Category1", "Category2"]);
		});

		$httpBackend.flush();
	});

	it('second call getCategories should return categories list from cache', function () {
		$httpBackend.expectGET(ApiBase + '/category').respond(["Category1", "Category2"]);

		CategoriesService.getCategories().then(function (response) {
			expect(response).toEqual(["Category1", "Category2"]);
		});

		$httpBackend.whenGET(ApiBase + '/category').respond([]); // Must not be called

		CategoriesService.getCategories().then(function (response) {
			expect(response).toEqual(["Category1", "Category2"]);
		});

		$httpBackend.flush();
	});

	xit('should create category', function () {
		$httpBackend.expectPOST(ApiBase + '/category', { "Name": "Category1" }).respond({ "Name": "Category1" });

		CategoriesService.createCategory({ "Name": "Category1" }).then(function (response) {
			expect(response).toEqual({ "Name": "Category1" });
		});

		$httpBackend.flush();
	});

	xit('should update category', function () {
		$httpBackend.expectPUT(ApiBase + '/category', { "id": 1, "Name": "Category1" }).respond({ "id": 1, "Name": "Category1" });

		CategoriesService.updateCategory({ "id": 1, "Name": "Category1" }).then(function (response) {
			expect(response).toEqual({ "id": 1, "Name": "Category1" });
		});

		$httpBackend.flush();
	});

	xit('should delete category', function () {
		$httpBackend.expectDELETE(ApiBase + '/category/11').respond(204);

		CategoriesService.deleteCategory(11).then(function (response) {
			expect(response.status).toEqual(204);
		});

		$httpBackend.flush();
	});
});