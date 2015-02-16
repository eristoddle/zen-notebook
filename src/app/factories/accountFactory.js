zenNotebook.factory('accountFactory', ['$rootScope', function ($rootScope) {
    return {
        token: '',
        endpoint: 'http://zen-notebook.local:8000/api/',
        notebooks: {},
        postData: function () {
            $http.post(this.endpoint + 'login', data).
                success(function (data, status, headers, config) {
                    console.log(data);
                }).
                error(function (data, status, headers, config) {
                    $scope.message = "Error!";
                    console.log(data);
                });
        },
        getData: function () {

        },
        login: function (email, pass) {

        },
        isLoggedIn: function () {

        },
        getNotebooks: function () {

        },
        getNotebook: function (id) {

        },
        saveNotebook: function () {

        }
    };
}]);
