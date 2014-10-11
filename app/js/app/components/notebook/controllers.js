zenNotebook.controller('CalendarController', ['$scope', '$rootScope', 'notebookFactory', function ($scope, $rootScope, notebookFactory) {
    $scope.$on('toggleLeft', function () {
         var stats = notebookFactory.getSidebar();
        for (var key in stats) {
            $scope.left[key] = stats[key];
        }
    });
}]);