//TODO: http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
//http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application
//TODO: This should be an injected service
zenNotebook.controller('dialogController', ['$scope', '$http', 'storageFactory', 'accountFactory', function ($scope, $http, storageFactory, accountFactory) {
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

    $scope.isLoggedIn = function () {
        return accountFactory.isLoggedIn();
    };

}]);