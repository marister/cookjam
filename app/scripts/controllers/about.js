'use strict';

/**
 * @ngdoc function
 * @name cookjamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cookjamApp
 */
angular.module('cookjamApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
