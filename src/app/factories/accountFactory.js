//TODO: http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
//http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application
//http://www.benlesh.com/2013/02/angularjs-creating-service-with-http.html
//http://stackoverflow.com/questions/12505760/processing-http-response-in-service
zenNotebook.factory('accountFactory', ['$http', function ($http) {
    return {
        token: '',
        endpoint: 'http://zen-notebook.local:8000/api/',
        notebooks: {},
        login: function (email, pass) {
            return $http.post(this.endpoint + 'attempt', {email: email, password: pass}).then(function (response) {
                return response.data;
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
