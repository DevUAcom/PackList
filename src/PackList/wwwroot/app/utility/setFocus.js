(function() {
    'use strict';

    angular
        .module('utility')
        .directive('setFocus', setFocus);

    setFocus.$inject = ['$timeout', '$parse'];
    
    function setFocus ($timeout, $parse) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
        	var model = $parse(attrs.setFocus);
        	scope.$watch(model, function (value) {
        		console.log('value=', value);
        		if (value === true) {
        			$timeout(function () {
        				element[0].focus();
        			});
        		}
        	});
        	element.bind('blur', function () {
        		console.log('blur');
        		scope.$apply(model.assign(scope, false));
        	});
        }
    }

})();