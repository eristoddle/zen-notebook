zenNotebook.controller('settingsController', ['$scope', '$rootScope', 'storageFactory', function ($scope, $rootScope, storageFactory) {
    $scope.components = [
        'notebook',
        'nanowrimo',
        'leanpub'
    ];

    $scope.changeComponent = function (component) {
        //TODO: Hack just reloading the page to get new component button to show correct icon
        $rootScope.active_component = component;
        storageFactory.setStorage('active_component', component);
        $rootScope.$broadcast('loadComponent');
        window.location.reload();
    };
}]);