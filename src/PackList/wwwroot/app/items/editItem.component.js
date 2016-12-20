(function() {
    'use strict';

	angular
		.module('app')
        .component('plEditItem', {
        	templateUrl: 'app/items/editItem.component.template.html',
        	controller: 'EditItemComponentController',
        	bindings: {
				resolve: '<',
				close: '&',
				dismiss: '&'
			}
      });

})();