//TODO: http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
//http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application
zenNotebook.factory('accountFactory', ['$http', function ($http) {
    return {
        token: '',
        endpoint: 'http://zen-notebook.local:8000/api/',
        notebooks: {},
        login: function (email, pass) {
            $http.post(this.endpoint + 'attempt', {email: email, password: pass}).
                success(function (data, status, headers, config) {
                    if (data.token == false) {
                        return {
                            token: false,
                            message: "Incorrect Login"
                        }
                    } else {
                        this.token = data.token;
                        return {
                            token: data.token,
                            message: "Success"
                        }
                    }
                }).
                error(function (data, status, headers, config) {
                    return {
                        token: false,
                        message: "Error"
                    }
                });
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
