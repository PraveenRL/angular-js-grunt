'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
    .controller('MainCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.cancelDeleteCallback = function () {
            console.log('cancelDeleteCallback');
        }

        $scope.deleteCallback = function () {
            console.log('deleteCallback');
        }

        $scope.cancelConfirmCallback = function () {
            console.log('cancelConfirmCallback');
        }

        $scope.confirmCallback = function () {
            console.log('confirmCallback');
        }
    });
