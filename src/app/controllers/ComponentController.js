zenNotebook.controller('componentController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('toggleLeft', function () {
        $scope.partial = 'partials/sidebar/' + $rootScope.active_component + '.html';
        $scope.leftChangeClass = !$scope.leftChangeClass;
    });
}]);