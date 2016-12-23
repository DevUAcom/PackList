(function() {
    'use strict';

	angular
		.module('app')
        .component('plItems', {
        	templateUrl: 'app/items/items.component.template.html',
        	controller: 'ItemsComponentController',
        	bindings: {
				itemList: '<',
				onAdd: '&',
				onEdit: '&',
				onDelete: '&'
			}
      });

})();