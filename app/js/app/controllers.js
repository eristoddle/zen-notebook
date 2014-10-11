zenNotebook.controller('BodyController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
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

    $scope.$on('global', function () {
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
    //TODO: Load this from a config file
    var message = menuFactory.subscribeClick();
    $scope.menu = menuFactory.menus.nav;
    $scope.expr = function (locals) {
        menuFactory.publishClick(locals);
    }
}]);

zenNotebook.controller('LeftController', ['$scope', 'menuFactory', 'notebookFactory', function ($scope, menuFactory, notebookFactory) {
    //TODO: This is a quick hack, modularize
    $scope.stats = {};

    $scope.$on('toggleLeft', function () {
        var message = menuFactory.subscribeClick(),
            current_count;
        $scope.leftChangeClass = !$scope.leftChangeClass;
        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        };
        current_count = notebookFactory.countWords(notebookFactory.getActiveContent());
        $scope.stats.word_count = current_count;
        $scope.stats.month_average = notebookFactory.getMonthAverage();
        $scope.stats.month_count = notebookFactory.getMonthCount();
    });

    $scope.$on('changeCount', function () {
        $scope.stats.word_count = notebookFactory.countWords(notebookFactory.getActiveContent());
    });
}]);

//TODO: Modularize how markup is built
zenNotebook.controller('FootController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.$on('toggleFoot', function () {
        var message = menuFactory.subscribeClick(),
            menus = menuFactory.menus.foot,
            menu = menus[message.action];
        $scope.footChangeClass = !$scope.footChangeClass;
        if (menu) {
            $scope.heading = menu.heading;
            $scope.body = menu.body;
            $scope.buttons = menu.buttons;
        }

        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        }
    });
}]);