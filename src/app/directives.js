//interact with contenteditable region
zenNotebook.directive("contenteditable", ['$rootScope', '$injector', function ($rootScope, $injector) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            //Choose component
            var factory = $injector.get($rootScope.active_component + 'Factory');
            //Load component
            //TODO: Hack to wait for file to load
            window.setTimeout(function(){
                element.html(factory.onLoad());
            }, 100);

            //Bind events to content
            element.bind("blur keyup change focus", function (event) {
                scope.$apply(factory.onWrite(element.html()));
                if ($rootScope.mute == true){
                    $injector.get('themeFactory').themeSound(event);
                }
            });

            //Event sent by component whenever content should change
            $rootScope.$on('changeContent', function (event, content){
                factory.onWrite(element.html());
                element.html(content);
                factory.onWrite(element.html());
            });

            $rootScope.$on('loadComponent', function (event){
                factory = $injector.get($rootScope.active_component + 'Factory');
                element.html(factory.onLoad());
            });
        }
    };
}]);

zenNotebook.directive('ngBlur', function () {
    return function (scope, elem, attrs) {
        elem.bind('blur', function () {
            scope.$apply(attrs.ngBlur);
        });
    };
});

zenNotebook.directive('ngFocus', function ($timeout) {
    return function (scope, elem, attrs) {
        scope.$watch(attrs.ngFocus, function (newval) {
            if (newval) {
                $timeout(function () {
                    elem[0].focus();
                }, 0, false);
            }
        });
    };
});