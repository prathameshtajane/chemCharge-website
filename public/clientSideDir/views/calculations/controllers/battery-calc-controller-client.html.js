(function () {
   angular
       .module('chemChargewebsite')
       .controller('batteryCalcController',batteryCalcController);
   
   function batteryCalcController(batteryCalcService,$location) {
       var vm=this;
       vm.calculateBatteryParameters=calculateBatteryParameters;
       vm.logout=logout;

       function calculateBatteryParameters(batteryParamsObj) {
           batteryCalcService
               .getBatteryCalcParameters(batteryParamsObj.capacity,batteryParamsObj.costPerModule)
               .success(function (batteryParamsObj) {
                   console.log(batteryParamsObj);
                   vm.solution="To construct given configuration total "+batteryParamsObj.numOfTotalModules
                       + " modules will be required and the estimated cost will be $"+batteryParamsObj.estimatedCostWOCasing;
               })
               .error(function (errorObj) {
                   console.log(errorObj);
               })
       }

       function logout() {
           $location.url("#/");
       }
   }
})();
