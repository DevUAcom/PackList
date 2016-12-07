(function() {
    'use strict';

	angular
		.module('app')
        .component('plAddItem', {
        	templateUrl: 'app/items/addItem.component.template.html',
        	controller: 'AddItemController',
        	bindings: {
				onAdd: '&'
			}
      });

})();