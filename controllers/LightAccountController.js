/**
 * Created by Abhed on 05/15/2015.
 */
(function () {
'use strict';
    angular.module('app')
             .controller('LightAccountController',LightAccountController);
    LightAccountController.$inject = ['$rootScope','$http'];
    function LightAccountController($rootScope,$http){
        var lightVm = this;
        lightVm.username = $rootScope.username;
       // console.log(lightVm.username);

            $http({
            method: 'GET',
            url: 'http://localhost:3000/wizard',
            params: lightVm.username
           }).success(function (data) {
                lightVm.userdata = data;

                $rootScope.firstname = data[0].firstname;
                $rootScope.lastname = data[0].lastname;
                $rootScope.email = data[0].email;

            });

          $rootScope.accounttype = 'Light';

    }
})();