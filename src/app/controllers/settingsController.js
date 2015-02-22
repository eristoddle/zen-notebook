zenNotebook.controller('settingsController', ['$scope', 'storageFactory', function ($scope, storageFactory) {
    $scope.settings = {
        components: [
            'notebook',
            'nanowrimo',
            'leanpub'
        ]
    };

    $scope.changeComponent = function (component) {
        //TODO: Hack just reloading the page to get new component button to show correct icon
        $rootScope.active_component = component;
        storageFactory.setStorage('active_component', component);
        $rootScope.$broadcast('loadComponent');
        window.location.reload();
    };
}]);