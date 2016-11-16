(function() {
    'use strict';

	angular
		.module('app')
        .component('plLuggage', {
        	templateUrl: 'app/luggage/luggage.component.template.html',
			bindings: {
			  luggageList: '<'
			}
      });

})();