//TODO: http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
//http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application
zenNotebook.factory('accountFactory', ['$http', function ($http) {
    return {
        token: '',
        endpoint: 'http://zen-notebook.local:8000/api/',
        notebooks: {},
        login: function (email, pass) {
            return $http.post(this.endpoint + 'attempt', {email: email, password: pass}).then(function (response) {
                if (response.data.token) {
                    this.token = response.data.token;
                }
                return response.data;
            });
        },
        isLoggedIn: function (token) {
            //return $http.post(this.endpoint + 'auth', {token: token}).then(function (response) {
            //    return response.data;
            //});
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
