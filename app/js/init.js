//Libraries
head.load(
    "js/lib/angular.min.js",
    "js/lib/angular-sanitize.min.js",
    "js/lib/nw-fileDialog.js",
    "js/lib/buzz.min.js"
);

//Main Application
head.load(
    'js/app/main.js',
    'js/app/directives.js',
    'js/app/controllers.js',
    'js/app/services.js'
);

//Components
//TODO: This has to be able to be done dynamically, possibly through the node part of the application?
head.load(
    'js/app/components/notebook/directives.js',
    'js/app/components/notebook/controllers.js',
    'js/app/components/notebook/services.js',
    'js/app/components/notebook/notebook.css',
    'js/app/components/nanowrimo/directives.js',
    'js/app/components/nanowrimo/controllers.js',
    'js/app/components/nanowrimo/services.js',
    'js/app/components/nanowrimo/nanowrimo.css'
);