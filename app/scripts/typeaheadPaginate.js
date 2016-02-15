angular.module('untitledApp')
  .directive('typeaheadPaginate', function ($timeout) {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ngModelCtrl) {
        attrs.$observe('typeaheadPaginate', function () {
          var copy = angular.copy(ngModelCtrl.$viewValue);
          ngModelCtrl.$setViewValue('');
          $timeout(function () {
            ngModelCtrl.$setViewValue(copy);
            elem.focus();
          });
        });
      }
    }
  });
