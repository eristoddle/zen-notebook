//TODO: Have component factories inherit from a base componentFactory: http://blog.revolunet.com/blog/2014/02/14/angularjs-services-inheritance/
zenNotebook.factory('componentFactory', ['$rootScope', function ($rootScope) {
    console.log(this);
    return {
        factoryName: 'null',
        documents: {},
        onLoad: function () {

        },
        onWrite: function () {

        },
        onExit: function () {

        },
        getActiveContent: function () {

        },
        countWords: function () {

        },
        getSidebar: function () {

        },
        getMenus: function () {

        },
        saveData: function () {

        },
        loadData: function () {

        }
    }
}]);