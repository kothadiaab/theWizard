/**
 * Created by Abhed on 05/15/2015.
 */
(function(){
    'use strict';
    angular.module('app')
        .controller('SummaryController',SummaryControllerFn);

//summaryFn function
    SummaryControllerFn.$inject = ['$rootScope','UpdateAccountType'];
    function SummaryControllerFn($rootScope,UpdateAccountType) {
        var summaryVm = this;
        summaryVm.accounttype = UpdateAccountType.updateAccountType($rootScope.accounttype);
        //console.log( summaryVm.accounttype);

        summaryVm.userSummaryInfo={
            username:    $rootScope.username,
            firstname:   $rootScope.firstname,
            lastname:    $rootScope.lastname,
            email:       $rootScope.email,
            accounttype: $rootScope.accounttype
        };



    }

})();