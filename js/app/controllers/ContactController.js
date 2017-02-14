function ContactController() {
    var vm = this;

    vm.name = 'Bill Gates';
    vm.email = 'william@microsoft.com'
    vm.phone = '1234567890'

    vm.changeName = function () {
      vm.name = 'Something else!'
    };
}

angular
    .module('app')
    .controller('ContactController', ContactController);
