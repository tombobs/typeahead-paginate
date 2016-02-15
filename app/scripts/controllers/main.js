'use strict';

angular.module('untitledApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {

    $scope.page = 1;

    $scope.getData = function (search, page) {
      return $http.get('data.json')
        .then(function (res) {
          var data = res.data.filter(function (item) {
            return item.indexOf(search) !== -1;
          });
          $scope.totalItems = data.length;
          return data.slice(((page - 1) * 5) || 0, 5 + (((page - 1) || 0) * 5));
        });
    };
  });
