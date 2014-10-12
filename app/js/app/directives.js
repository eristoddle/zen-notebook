//TODO: Replace local storage with service

//interact with contenteditable region
zenNotebook.directive("contenteditable", ['$rootScope', 'notebookFactory', 'themeFactory', function ($rootScope, notebookFactory, themeFactory) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            //Choose component
            var factory = notebookFactory;
            //var factory = window[$rootScope.active_component + 'Factory'];

            //Load component
            element.html(factory.onLoad());

            //Bind events to content
            element.bind("blur keyup change focus", function (event) {
                scope.$apply(factory.onWrite(element.html()));
                themeFactory.themeSound(event);
            });

            //Event sent by component whenever content should change
            $rootScope.$on('changeContent', function (event, content){
                factory.onWrite(element.html());
                element.html(content);
                factory.onWrite(element.html());
            });
        }
    };
}]);

//TODO: Dynamically inject services in main application
//https://docs.angularjs.org/api/auto/service/$injector
//http://stackoverflow.com/questions/14415845/angularjs-dynamically-inject-scope-or-controller
//function MyCtrl($scope, $injector) {
//    $scope.doSomething = function(someService) {
//        var service = $injector.get(someService)  // someService contains the name of a service
//        service.value += 10
//    }