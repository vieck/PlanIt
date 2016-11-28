'use strict';

angular.module('myApp.register', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'app/register/register.html',
            controller: 'RegisterCtrl'
        });
    }])

    .controller('RegisterCtrl', function ($scope, $location) {
        $scope.register = {
            first: '',
            last: '',
            user: '',
            password: ''
        };

        $scope.create = function () {

        }
    });