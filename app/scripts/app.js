'use strict';

angular
    .module('sampleApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/test', {
                templateUrl: 'scripts/controllers/test/test.html',
                controller: 'TestController'
            })
            .otherwise({
                redirectTo: '/test'
            })
  });
