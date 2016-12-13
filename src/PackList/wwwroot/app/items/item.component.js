(function () {
	'use strict';

	angular
		.module('app')
        .component('plItem', {
        	templateUrl: 'app/items/item.component.template.html',
        	controller: 'ItemComponentController',
        	bindings: {
        		item: '<',
        		onEdit: '&',
				onDelete: '&'
        	}
        });

})();