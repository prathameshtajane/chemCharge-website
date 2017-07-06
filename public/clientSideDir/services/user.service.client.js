(function (){
   angular
       .module("chemChargewebsite")
       .factory('userService',userService);

    function userService($http){
        var api={
            "findUserByCredentails" : findUserByCredentails
        };
        return api;

        function findUserByCredentails(username,password){
            var req = {
                method: 'POST',
                url: '/admin/login',
                headers: {
                    'Content-Type': "application/json",
                    'Accept':"application/json"
                },
                data: {"username":username,"password": password}
            };
            return $http(req);
        }
    }

})();
