//calendar
zenNotebook.directive('calendar', ['$compile', 'calendarFactory', function ($compile, calendarFactory) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, element, attrs) {
            element.html(calendarFactory.getTemplate());
            $compile(element.contents())(scope);
        }
    };
}]);

//calendar click event
zenNotebook.directive("changedate", ['$rootScope', '$compile', 'calendarFactory', 'notebookFactory', function ($rootScope, $compile, calendarFactory, notebookFactory) {
    return function (scope, element, attrs) {
        //TODO: Clicking today should clear content if none exists
        element.bind("click", function () {
            if (attrs.action == 'set-date') {
                $rootScope.$broadcast('changeDate', notebookFactory.activeDateText(), attrs.date);
                //TODO: Figure out how to move this here!!!
//                notebookFactory.onWrite(notebookFactory.getStorage('content'));
//                $rootScope.$broadcast('changeContent', notebookFactory.onChangeDate(notebookFactory.activeDateText(), attrs.date));
//                notebookFactory.onWrite(notebookFactory.getStorage('content'));
                notebookFactory.setActiveDate(attrs.date);
            }
            angular.element(
                document.getElementById('cal'))
                .replaceWith($compile(calendarFactory.getTemplate(parseInt(attrs.month) + 1, parseInt(attrs.year), [parseInt(attrs.day)]))(scope)
            );
        });
    };
}]);