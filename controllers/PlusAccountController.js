/**
 * Created by Abhed on 05/15/2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .controller('PlusAccountController',PlusAccountControllerFn);
    PlusAccountControllerFn.$inject=['$rootScope','$scope'];
    function PlusAccountControllerFn($rootScope,$scope){
        var plusVm = this;
        plusVm.count=0;

        this.updateCheckCount= function(){
            plusVm.count++;
            //console.log(plusVm.count);

            if(plusVm.count <= 3){
                $rootScope.accounttype = 'Standard Account';

            }else if(plusVm.count >3){
                $rootScope.accounttype='Plus Account';
            }

            //console.log($rootScope.accounttype);

        };


    }




})();