'use strict';

/**
 * @ngdoc function
 * @name cookjamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookjamApp
 */
angular.module('cookjamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
