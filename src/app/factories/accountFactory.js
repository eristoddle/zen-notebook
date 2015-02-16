zenNotebook.factory('accountFactory', ['$rootScope', function ($rootScope) {
    return {
        token: '',
        endpoint: 'http://zen-notebook.local:8000/api/',
        notebooks: {},
        postData: function (path, data) {
            $http.post(this.endpoint + path, data).
                success(function (data, status, headers, config) {
                    return {
                        data: data,
                        message: 'Success'
                    }
                }).
                error(function (data, status, headers, config) {
                    return {
                        data: true,
                        message: 'Error'
                    }
                });
        },
        getData: function () {

        },
        login: function (email, pass) {
            var result = this.postData(
                'attempt',
                {
                    email: email,
                    password: pass
                }
            );
            if (result.data.token) {
                this.token = result.data.token;
                return this.token;
            } else {
                return 'Incorrect Details';
            }
            return result.message;
        },
        isLoggedIn: function () {
            return false;
        },
        getNotebooks: function () {

        },
        getNotebook: function (id) {

        },
        saveNotebook: function () {

        }
    };
}]);
