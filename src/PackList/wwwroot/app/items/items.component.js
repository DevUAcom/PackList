(function() {
    'use strict';

	angular
		.module('app')
        .component('plItems', {
        	templateUrl: 'app/items/items.component.template.html',
			bindings: {
				itemList: '<',
				onAdd: '&',
				onEdit: '&',
				onDelete: '&'
			}
      });

})();