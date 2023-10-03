angular
    .module('sampleApp')
    .directive('confirmationModal', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/shared/components/confirmation-modal/confirmation-modal.directive.html',
            scope: {
                title: '=',
                content: '=',
                cancelActionText: '=',
                confirmActionText: '=',
                cancelActionCallback: '&',
                confirmActionCallback: '&',
                modalId: '='
            }
        }
    });