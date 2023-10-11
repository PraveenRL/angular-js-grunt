angular
    .module('sampleApp')
    .directive('accordion', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/shared/components/accordion/accordion.directive.html',
            cssUrl: 'scripts/shared/components/accordion/accordion.directive.css',
            scope: {
                data: "=",
                active: "="
            },
            controller: function ($scope) {
                $scope.setAccordion = function (index) {
                    if ($scope.active == index)
                        $scope.active = null;
                    else
                        $scope.active = index;
                }
            }
        }
    });