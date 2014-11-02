zenNotebook.controller('BodyController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    //TODO: This can be part of the theme service
    $scope.themes = {
        zen_dark: 'zen dark',
        zen_light: 'zen light',
        terminal: 'terminal courier',
        igcognito: 'incognito',
        typewriter: 'typewriter light',
        carbon: 'carbon dark',
        relax: 'relax dark'
    };
    /*TODO: Implement theming system where there are classes in the template indicating
     where a theme class has to be applied: theme-font, theme-main-color, theme-text-color
     */
    $scope.theme = window.localStorage && window.localStorage.getItem('theme');
    if (!$scope.theme) {
        $scope.theme = 'zen dark';
    }
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
            for (var key in $scope.themes) {
                rowCount = rowCount + 1;
                if (rowCount == nextCount) {
                    $scope.theme = $scope.themes[key];
                    window.localStorage && window.localStorage.setItem('theme', $scope.theme);
                    $scope.count = $scope.count + 1;
                    return;
                }
            }
        }
    });
}]);

zenNotebook.controller('NavController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    var message = menuFactory.subscribeClick();
    $scope.menu = menuFactory.menus.nav;
    $scope.expr = function (locals) {
        menuFactory.publishClick(locals);
    }
}]);

zenNotebook.controller('LeftController', ['$scope', '$rootScope', 'menuFactory', function ($scope, $rootScope, menuFactory) {
    $scope.left = {};

    $scope.$on('toggleLeft', function () {
        $scope.left.partial = 'components/' + $rootScope.active_component + '.html';
        $scope.leftChangeClass = !$scope.leftChangeClass;
        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        };
    });
}]);

//TODO: Modularize how markup is built
zenNotebook.controller('FootController', ['$scope', '$rootScope', 'menuFactory', function ($scope, $rootScope, menuFactory) {
    $scope.foot = {};
    $scope.active_component = $rootScope.active_component;
    $scope.editing_component = $rootScope.editing_component;
    $scope.$on('toggleFoot', function () {
        var message = menuFactory.subscribeClick(),
            menus = menuFactory.menus.foot,
            menu = menus[message.action];
        $scope.footChangeClass = !$scope.footChangeClass;
        $scope.foot.partial = 'footer/' + message.action + '.html';

        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        };

        $scope.changeComponent = function(component){
            $scope.active_component = component;
            $scope.editing_component = false;
            $rootScope.editing_component = false;
            $rootScope.active_component = component;
        };
    });
}]);