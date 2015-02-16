zenNotebook.controller('dialogController', ['$scope', 'storageFactory', 'accountFactory', function ($scope, storageFactory, accountFactory) {
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
        storageFactory.setStorage('zen_notebook_token', null);
        var result = accountFactory.login(user.email, user.password);
        if(result.token) {
            storageFactory.setStorage('zen_notebook_token', result.token);
        }
        $scope.message = result.message;
    };

    $scope.isLoggedIn = function () {
        return accountFactory.isLoggedIn();
    };

}]);