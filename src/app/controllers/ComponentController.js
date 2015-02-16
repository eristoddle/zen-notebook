//controller for component sidebar functionality
//the menu factory handles the functionality
zenNotebook.controller('ComponentController', ['$scope', '$rootScope', 'menuFactory', function ($scope, $rootScope, menuFactory) {
    $scope.$on('toggleLeft', function () {
        $scope.partial = 'partials/sidebar/' + $rootScope.active_component + '.html';
        $scope.leftChangeClass = !$scope.leftChangeClass;
    });
}]);