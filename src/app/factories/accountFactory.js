//TODO: http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
//http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application
zenNotebook.factory('accountFactory', ['$http', 'storageFactory', function ($http, storageFactory) {
    return {
        token: storageFactory.getStorage('zen_notebook_token'),
        last_auth: storageFactory.getStorage('zen_notebook_last_auth'),
        message: '',
        email: storageFactory.getStorage('zen_notebook_email'),
        endpoint: 'http://zen-notebook.local:8000/api/',
        current_notebook: '',
        notebooks: null,
        login: function (email, pass) {
            storageFactory.setStorage('zen_notebook_token', null);
            return $http.post(this.endpoint + 'attempt', {email: email, password: pass}).then(function (response) {
                if (response.data.token) {
                    this.message = "Logged In";
                    storageFactory.setStorage('zen_notebook_email', email);
                    storageFactory.setStorage('zen_notebook_token', response.data.token);
                    this.token = response.data.token;
                    //storageFactory.setStorage('zen_notebook_last_auth', Date());
                }
                return response.data;
            });
        },
        checkLogin: function () {
            if (this.token) {
                return $http.get(this.endpoint + 'auth' + '?token=' + this.token).
                    then(function (response) {
                        return response;
                    });
            }
            return false;
        },
        getNotebooks: function () {
            return $http({
                method: 'GET',
                url: this.endpoint + 'users/notebooks',
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }).then(function (response) {
                this.notebooks = response.data;
                return response;
            });
        },
        getNotebook: function (id) {
            return $http({
                method: 'GET',
                url: this.endpoint + 'users/notebook?id=' + id,
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }).then(function (response) {
                return response;
            });
        },
        saveNotebook: function (notebook) {
            return $http({
                method: 'POST',
                url: this.endpoint + 'notebooks',
                headers: {
                    'Authorization': 'Bearer ' + this.token
                },
                data: {
                    notebook: notebook
                }
            }).then(function (response) {
                return response;
            });
        }
    };
}]);
