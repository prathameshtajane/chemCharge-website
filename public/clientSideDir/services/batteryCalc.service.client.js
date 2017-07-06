(function (){
    angular
        .module("chemChargewebsite")
        .factory('batteryCalcService',batteryCalcService);

    function batteryCalcService($http){
        var api={
            "getBatteryCalcParameters" : getBatteryCalcParameters
        };
        return api;

        function getBatteryCalcParameters(batteryCapacity,costPerModule){
            var req = {
                method: 'POST',
                url: '/admin/calculations/battery-size',
                headers: {
                    'Content-Type': "application/json",
                    'Accept':"application/json"
                },
                data: {"capacity":batteryCapacity,"costPerModule": costPerModule}
            };
            return $http(req);
        }
    }

})();
