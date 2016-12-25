zenNotebook.controller('bodyController', ['$scope', '$rootScope', 'menuFactory', 'themeFactory', 'ngDialog', function ($scope, $rootScope, menuFactory, themeFactory, ngDialog) {
    $scope.menu = menuFactory.menus.nav;
    $scope.theme = themeFactory.theme;
    $scope.count = 0;

    $scope.$on('body', function () {
        var message = menuFactory.subscribeClick(),
            nextCount,
            rowCount = 0;
        if ($scope.count == 7) {
            $scope.count = 0;
        }
        nextCount = $scope.count + 1;

        if (message.action == 'theme') {
            for (var key in themeFactory.themes) {
                rowCount = rowCount + 1;
                if (rowCount == nextCount) {
                    $scope.theme = themeFactory.themes[key];
                    window.localStorage && window.localStorage.setItem('theme', $scope.theme);
                    $scope.count = $scope.count + 1;
                    return;
                }
            }
        }

        ngDialog.open({template: 'partials/dialog/' + message.action + '.html'});
    });

    $scope.$on('toggleLeft', function () {
        $scope.partial = 'partials/sidebar/' + $rootScope.active_component + '.html';
        $scope.leftChangeClass = !$scope.leftChangeClass;
    });

    $scope.action = function (locals) {
        menuFactory.publishClick(locals);
    };
}]);