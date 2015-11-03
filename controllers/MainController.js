/**
 * Created by Abhed on 05/15/2015.
 */
(function(){
'use strict';
    angular.module('app')
        .controller('MainController',MainController);

//MainController function
    MainController.$inject = ['$rootScope'];
    function MainController($rootScope) {
        var mc = this;
        mc.reqObj = {
            username:''
        };
        $rootScope.username = mc.reqObj;
       // console.log($rootScope.username);


    }

})();

