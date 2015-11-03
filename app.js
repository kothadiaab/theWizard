/**
 * Created by Abhed on 05/15/2015.
 */

(function () {
    'use strict';

   angular.module("app",['ngRoute'])
          .config(moduleConfigFn)
          .factory('UpdateAccountType',UpdateAccountTypeFn);


    UpdateAccountTypeFn.$inject=[];
    function UpdateAccountTypeFn(){
        var obj={}
        var accountType='';

        obj.updateAccountType = function(a){
            accountType = a;
            return accountType;
        }

        return obj;
    }


    moduleConfigFn.$inject = ['$routeProvider'];

    function moduleConfigFn($routeProvider){
        $routeProvider
            .when('/Light',{
                templateUrl: 'views/Lite-Account.html',
                controller: 'LightAccountController',
                controllerAs: 'lightVm',

            })
            .when('/summary',{
                templateUrl: 'views/account-summary.html',
                controller: 'SummaryController',
                controllerAs: 'summaryVm',

            })
            .when('/standard',{
                templateUrl: 'views/Standard-Account.html',
                controller: 'StandardAccountController',
                controllerAs: 'standardVm',

            })
            .when('/plus',{
                templateUrl: 'views/Plus-Account.html',
                controller: 'PlusAccountController',
                controllerAs: 'plusVm',

            })
            .when('/premium',{
                templateUrl: 'views/Premium-Account.html',
                controller: 'PremiumAccountController',
                controllerAs: 'premiumVm',

            })
            .when('/terms',{
                templateUrl: 'views/terms&condition_dummy.html'
            })
            .when('/exit',{
                templateUrl: 'views/Exit.html'
            })
            .otherwise({
                redirectTo : '/index.html'
            });
    }

})();
