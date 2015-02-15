//controller for changes that effect the whole document at the body element level
//good for instantaneous changes from the the nav menu buttons
//currently only used for theme
zenNotebook.controller('BodyController', ['$scope', 'menuFactory', 'ngDialog', function ($scope, menuFactory, ngDialog) {
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

        ngDialog.open({template: 'partials/dialog/' + message.action + '.html'});
    });

    $scope.expr = function (locals) {
        menuFactory.publishClick(locals);
    };
}]);

//controller for the nav menu
//the menu factory handles the functionality
zenNotebook.controller('NavController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.menu = menuFactory.menus.nav;
    $scope.expr = function (locals) {
        menuFactory.publishClick(locals);
    }
}]);

//controller for component sidebar functionality
//the menu factory handles the functionality
zenNotebook.controller('ComponentController', ['$scope', '$rootScope', 'menuFactory', function ($scope, $rootScope, menuFactory) {
    $scope.left = {};

    $scope.$on('toggleLeft', function () {
        $scope.left.partial = 'partials/sidebar/' + $rootScope.active_component + '.html';
        $scope.leftChangeClass = !$scope.leftChangeClass;
        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        };
    });
}]);

//TODO: http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
//http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application
//TODO: This should be an injected service
zenNotebook.controller('DialogController', ['$scope', '$http', 'storageFactory', function ($scope, $http, storageFactory) {
    $scope.endpoint = 'http://zen-notebook.local:8000/api/';
    $scope.components = [
        'notebook',
        'nanowrimo',
        'leanpub'
    ];

    $scope.changeComponent = function (component) {
        //TODO: Hack just reloading the page to get new component button to show correct icon
        $rootScope.active_component = component;
        storageFactory.setStorage('active_component', component);
        $rootScope.$broadcast('loadComponent');
        window.location.reload();
    };

    $scope.login = function (user) {
        $http.post($scope.endpoint + 'attempt', {email: user.email, password: user.password}).
            success(function (data, status, headers, config) {
                if (data.token == false) {
                    $scope.message = "Incorrect Login Details"
                } else {
                    $scope.message = "Success";
                    storageFactory.setStorage('zen_notebook_token', data.token);
                }
            }).
            error(function (data, status, headers, config) {
                $scope.message = "Error!";
                console.log(data);
            });
    };

    $scope.isConnected = function () {
        $http.post($scope.endpoint + 'auth', data).
            success(function (data, status, headers, config) {
                console.log(data);
            }).
            error(function (data, status, headers, config) {
                $scope.message = "Error!";
                console.log(data);
            });
    };

    $scope.getNoteBooks = function () {
        $http.post($scope.endpoint + 'login', data).
            success(function (data, status, headers, config) {
                console.log(data);
            }).
            error(function (data, status, headers, config) {
                $scope.message = "Error!";
                console.log(data);
            });
    };

    $scope.getNoteBook = function (id) {
        $http.post($scope.endpoint + 'login', data).
            success(function (data, status, headers, config) {
                console.log(data);
            }).
            error(function (data, status, headers, config) {
                $scope.message = "Error!";
                console.log(data);
            });
    };

    $scope.saveNotebook = function (id) {
        $http.post($scope.endpoint + 'login', data).
            success(function (data, status, headers, config) {
                console.log(data);
            }).
            error(function (data, status, headers, config) {
                $scope.message = "Error!";
                console.log(data);
            });
    };
}]);