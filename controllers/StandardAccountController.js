/**
 * Created by Abhed on 05/15/2015.
 */
(function(){
    'use strict';

    angular.module('app')
           .controller('StandardAccountController',StandardAccountControllerFn);
    StandardAccountControllerFn.$inject=['$rootScope'];
    function StandardAccountControllerFn($rootScope){
        var standardVm = this;
        $rootScope.accounttype = 'Standard Account';


    }




})();