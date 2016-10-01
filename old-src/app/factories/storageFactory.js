//handles non-file data storage
//TODO: should this handle file storage also?
//TODO: this needs to switch based on the platform because localStorage won't fly for all
zenNotebook.factory('storageFactory', ['$rootScope', function ($rootScope) {
    return {
        getStorage: function (key, component) {
            if (component) {
                key = component + '.' + key;
            }
            return window.localStorage.getItem(key);
        },
        setStorage: function (key, data, component) {
            if (component) {
                key = component + '.' + key;
            }
            window.localStorage.setItem(key, data);
        },
        deleteStorage: function (key, component) {
            if (component) {
                key = component + '.' + key;
            }
            window.localStorage.removeItem(key);
        }
    }
}]);