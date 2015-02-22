zenNotebook.controller('dialogController', ['$scope', 'storageFactory', 'accountFactory', function ($scope, storageFactory, accountFactory) {
    $scope.settings = {
        components: [
            'notebook',
            'nanowrimo',
            'leanpub'
        ]
    };
    $scope.account = {
        login: {
            email: accountFactory.email
        },
        token: accountFactory.token,
        loggedIn: false,
        message: accountFactory.message,
        notebooks: {}
    };

    $scope.changeComponent = function (component) {
        //TODO: Hack just reloading the page to get new component button to show correct icon
        $rootScope.active_component = component;
        storageFactory.setStorage('active_component', component);
        $rootScope.$broadcast('loadComponent');
        window.location.reload();
    };

    $scope.login = function (user) {
        accountFactory.login(user.email, user.password).then(function (res) {
            $scope.account.message = accountFactory.message;
            $scope.account.loggedIn = true;
        });
    };

    //accountFactory.checkLogin().then(function (res) {
    //    $scope.account.message = accountFactory.message;
    //    $scope.account.loggedIn = true;
    //});

    accountFactory.getNotebooks().then(function (res) {
        console.log(res.data);
        $scope.account.message = accountFactory.message;
        $scope.account.notebooks = accountFactory.notebooks;
        $scope.account.loggedIn = true;
    });
}]);