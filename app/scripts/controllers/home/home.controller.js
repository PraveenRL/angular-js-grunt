'use strict';

angular.module('sampleApp')
    .controller('HomeController', function ($scope) {
        $scope.name = "Test";

        $scope.cancelDeleteCallback = function () {
            console.log('cancelDeleteCallback');
        }

        $scope.deleteCallback = function () {
            console.log('deleteCallback');
        }
    });
