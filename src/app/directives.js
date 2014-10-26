//interact with contenteditable region
zenNotebook.directive("contenteditable", ['$rootScope', '$injector', function ($rootScope, $injector) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            //Choose component
            var factory = $injector.get($rootScope.active_component + 'Factory');
            //Load component
            element.html(factory.onLoad());

            //Bind events to content
            element.bind("blur keyup change focus", function (event) {
                scope.$apply(factory.onWrite(element.html()));
                //TODO: I think Windows version has error if buzz is used
                if ($rootScope.os != 'Windows'){
                    $injector.get('themeFactory').themeSound(event);
                }
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