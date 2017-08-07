(function () {
    'use strict';

    angular
        .module('bags')
        .controller('BagsComponentController', BagsComponentController);

    BagsComponentController.$inject = ['BagsService'];
    function BagsComponentController(BagsService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = BagsService.getBags();

    }
})();
