zenNotebook.controller('accountController', ['$scope', 'accountFactory', function ($scope, accountFactory) {
    $scope.account = {
        login: {
            email: accountFactory.email
        },
        token: accountFactory.token,
        loggedIn: false,
        message: accountFactory.message,
        notebooks: {}
    };

    $scope.login = function (user) {
        accountFactory.login(user.email, user.password).then(function (res) {
            $scope.account.message = accountFactory.message;
            $scope.account.loggedIn = true;
            accountFactory.getNotebooks().then(function (res) {
                $scope.account.notebooks = res.data.data;
            });
        });
    };

    $scope.getNotebook = function (id) {
        accountFactory.getNotebook(id).then(function (res) {
            console.log(res);
        });
    };

    accountFactory.checkLogin().then(function (res) {
        $scope.account.message = accountFactory.message;
        $scope.account.loggedIn = true;
        accountFactory.getNotebooks().then(function (res) {
            $scope.account.notebooks = res.data.data;
        });
    });
}]);