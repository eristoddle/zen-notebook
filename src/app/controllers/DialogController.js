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
        accountFactory.login(user.email, user.password).then(function (d) {
            if (d.token) {
                $scope.message = "Success";
                storageFactory.setStorage('zen_notebook_token', d.token);
                $scope.isLoggedIn(d.token);
            } else {
                $scope.message = "Error";
            }
        });
    };

    $scope.isLoggedIn = function () {
        var token = storageFactory.getStorage('zen_notebook_token');
        var success = accountFactory.isLoggedIn(token);
        console.log(success);
        //return accountFactory.isLoggedIn(token);
    };

}]);