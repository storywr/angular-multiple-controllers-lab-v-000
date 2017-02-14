function StaffController() {
    var vm = this;

    vm.name = 'Steve Jobs';
    vm.email = 'steve@apple.com';
    vm.phone = '1234567890';
}

angular
    .module('app')
    .controller('StaffController', StaffController);
