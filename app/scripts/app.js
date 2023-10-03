'use strict';

/**
 * @ngdoc overview
 * @name sampleApp
 * @description
 * # sampleApp
 *
 * Main module of the application.
 */
angular
    .module('sampleApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'scripts/controllers/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/home', {
                templateUrl: 'scripts/controllers/home/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                // redirectTo: '/main'
                templateUrl: '404.html',
            })
  });
