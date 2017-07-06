(function () {
    angular
        .module("chemChargewebsite")
        .controller('loginController',loginController);
    
    function loginController(userService,$location,$rootScope) {
        var vm = this;
        vm.login=login;
        vm.goToHomepage=goToHomepage;
        function init() {
        }
        init();

        function goToHomepage() {
            $location.url("/");
        }

        function login(user){
            if(typeof user != 'undefined'){
            userService
                .findUserByCredentails(user.username,user.password)
                .success(function (user) {
                    console.log(user);
                    $location.url("/admin/calculations");})
                .error(function (err) {
                    vm.error = 'Invalid Admin Credentials';
                })
            }
            else{
                vm.error = 'Please enter Username and Password';
            }

        }
        
    }
})();
