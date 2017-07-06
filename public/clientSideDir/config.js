
(function () {
    angular
        .module('chemChargewebsite')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl:'clientSideDir/views/user/templates/login-view-client.html',
                controller:'loginController',
                controllerAs:'model'
            })

            .when("/admin/calculations",{
                templateUrl:'clientSideDir/views/calculations/templates/battery-calc-view-client.html',
                controller:'batteryCalcController',
                controllerAs:'model'
            })
            .otherwise({
                redirectTo:'#/'
                });

    }
})();
