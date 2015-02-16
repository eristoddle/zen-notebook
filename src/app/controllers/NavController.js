zenNotebook.controller('NavController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.menu = menuFactory.menus.nav;
}]);